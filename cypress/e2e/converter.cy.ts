import cypress from 'cypress'
import CURRENCIES from '../constants'

describe('Test Home Page', () => {
  beforeEach(() => {
    cy.intercept(
      'http://localhost:3001/latest?apikey=1234567890&base=USD&currencies=USD,ARS,GBP,BTC,AUD,CNY,JPY,CAD,EUR',
      {
        fixture: '../fixtures/currencies.json',
      }
    )
    cy.visit('/')
  })
  it('check header', () => {
    cy.get('[data-cy=header]')
  })
  it('check footer', () => {
    cy.get('[data-cy=footer]')
  })
  it('check update time', () => {
    cy.get('[data-cy=update-time]')
  })

  CURRENCIES.forEach(({ code, name }) => {
    it(`${name} card open modal`, () => {
      cy.get(`[data-cy=${code}]`).click()
      cy.get(`[data-cy=modal]`)
      cy.get(`[data-cy=modal-empty-space]`).click()
    })
  })

  CURRENCIES.forEach(({ code, name }, index) => {
    it(`check ${name} card content`, () => {
      if (code != 'USD') {
        cy.get(`[data-cy=${code}]`).should(
          'have.text',
          `${name}${(index + 1) * 2}.00000`
        )
      } else {
        cy.get(`[data-cy=${code}]`).should('have.text', `${name}`)
      }
    })
  })

  for (let i = 0; i < 4; i++) {
    const { code: mainCode, name: mainName } = CURRENCIES[i]
    it(`check converter for ${mainName}`, () => {
      cy.get(`[data-cy=${mainCode}]`).click()
      cy.get(`[data-cy=modal]`)
      CURRENCIES.forEach(({ code, name }, index) => {
        cy.intercept(
          `http://localhost:3001/latest?apikey=1234567890&base_currency=${code}&currencies=${mainCode}`,
          {
            fixture: `../fixtures/${mainCode}.json`,
          }
        )
        if (index !== i) {
          cy.get(`[data-cy=modal-option-${code}]`).click()
          cy.get('[data-cy=modal-message]').should(
            'have.text',
            `1 ${name} = 0.92120 ${mainName}`
          )
        }
      })
    })
  }

  it('same on reload', () => {
    cy.get('[data-cy=update-time]').then((time) => {
      cy.wait(60_000)
      cy.reload()
      cy.get('[data-cy=update-time]').should('has.text', time.text())
    })
  })
})
