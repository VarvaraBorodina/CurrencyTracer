import cypress from 'cypress'
import ROUTE_NAMES, { linkNames } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl.toString()

describe('Test Theme Change', () => {
  beforeEach(() => {
    cy.intercept(
      'http://localhost:3001/latest?apikey=1234567890&base=USD&currencies=USD,ARS,GBP,BTC,AUD,CNY,JPY,CAD,EUR',
      {
        fixture: '../fixtures/currencies.json',
      }
    )
  })
  Object.keys(ROUTE_NAMES).forEach((page, index) => {
    it(`check initial darck color on ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
    })
    it(`change theme on toggle on ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.get('[data-cy=toggle]').click()
      cy.get('body').should(
        'have.css',
        'background-color',
        'rgb(220, 250, 217)'
      )
    })
    it(`get back darch theme on double toggle on ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.get('[data-cy=toggle]').click()
      cy.get('[data-cy=toggle]').click()
      cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
    })
    it(`get the same theme after reload on ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.visit(linkNames[page])
      cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
      cy.reload()
      cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
      cy.get('[data-cy=toggle]').click()
      cy.get('body').should(
        'have.css',
        'background-color',
        'rgb(220, 250, 217)'
      )
      cy.reload()
      cy.get('body').should(
        'have.css',
        'background-color',
        'rgb(220, 250, 217)'
      )
    })
    it(`get darch theme after cleare localStorage on ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.clearLocalStorage()
      cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
    })
    it(`same theme after redirect to another page from ${linkNames[page]}`, () => {
      cy.visit(linkNames[page])
      cy.get('[data-cy=toggle]').click()
      Object.values(ROUTE_NAMES).forEach((link) => {
        cy.visit(link)
        cy.get('body').should(
          'have.css',
          'background-color',
          'rgb(220, 250, 217)'
        )
      })
    })
  })
})
