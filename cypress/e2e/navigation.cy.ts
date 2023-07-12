import cypress from 'cypress'
import ROUTE_NAMES, { linkNames } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl.toString()

describe('Test Navigation', () => {
  beforeEach(() => {
    cy.intercept(
      'http://localhost:3001/latest?apikey=1234567890&base=USD&currencies=USD,ARS,GBP,BTC,AUD,CNY,JPY,CAD,EUR',
      {
        fixture: '../fixtures/currencies.json',
      }
    )
  })
  it('navigation exist for "/"', () => {
    cy.visit('/')
    cy.get('[data-cy=navigation]')
  })

  it('"/" should redirect to home page', () => {
    cy.visit('/')
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.HOME}`)
  })

  it('"/time-line" should redirect to timeLine page', () => {
    cy.visit('/time-line')
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.TIMELINE}`)
  })

  it('"/contacts" should redirect to contacts page', () => {
    cy.visit('/contacts')
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.CONTACTS}`)
  })

  it('"/bank-card" should redirect to bankCard page', () => {
    cy.visit('/bank-card')
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.BANKCARD}`)
  })

  Object.keys(ROUTE_NAMES).forEach((page) => {
    Object.keys(ROUTE_NAMES).forEach((key) => {
      it(`Test ${linkNames[page]} routes: ${linkNames[key]} should redirect to ${ROUTE_NAMES[key]}`, () => {
        cy.visit(ROUTE_NAMES[page])
        cy.get(
          `[data-cy=${ROUTE_NAMES[key].slice(1, ROUTE_NAMES[key].length)}path]`
        )
          .contains(linkNames[key])
          .click()
        cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES[key]}`)
      })
    })
  })
})
