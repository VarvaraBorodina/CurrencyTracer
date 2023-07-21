import { should } from 'chai'
import cypress from 'cypress'
import CURRENCIES from '../constants'

describe('Test BankCard Page', () => {
  beforeEach(() => {
    cy.visit('/bank-card')
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
  it('check map', () => {
    cy.get('[data-cy=map]')
  })
  it('check search', () => {
    cy.get('[data-cy=search]')
  })

  it('on input focus options appear', () => {
    cy.get('[data-cy=search-input]').focus()
    cy.get('[data-cy=search-block]')
  })

  it('No options appear if input is not on focus', () => {
    cy.get('[data-cy=search-block]').should('not.exist')
  })

  it('No options appear if input is not on focus', () => {
    cy.get('[data-cy=search-block]').should('not.exist')
  })

  it('all options on empty input', () => {
    cy.get('[data-cy=search-input]').focus()
    cy.get('[data-cy=search-block]').should(
      'have.text',
      'Commercial DollarArgentine PesoLibraBitcoinAustralian DollarYuanYenCanadian DollarEuro'
    )
  })

  it('elastic search', () => {
    cy.get('[data-cy=search-input]').type('dOlLaR')
    cy.get('[data-cy=search-block]').should(
      'have.text',
      'Commercial DollarAustralian DollarCanadian Dollar'
    )
  })

  it('on click option should become input value', () => {
    cy.get('[data-cy=search-input]').focus()
    cy.get(`[data-cy=search-block-${2}]`)
      .click()
      .then((value) => {
        cy.get('[data-cy=search-input]').should('have.value', value.text())
      })
  })

  for (let i = 0; i < CURRENCIES.length; i++) {
    it('on click option should become input value', () => {
      cy.get('[data-cy=search-input]').focus()
      cy.get(`[data-cy=search-block-${i}]`)
        .click()
        .then((value) => {
          cy.get('[data-cy=search-input]').should('have.value', value.text())
        })
    })
  }
})
