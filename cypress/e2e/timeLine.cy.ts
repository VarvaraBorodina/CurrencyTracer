import { should } from 'chai'
import cypress from 'cypress'

describe('Test TimeLine Page', () => {
  beforeEach(() => {
    cy.visit('/time-line')
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

  it('check change input type button', () => {
    cy.get('[data-cy=input-type-button]')
  })

  for (let i = 0; i < 2; i++) {
    it(`check dropdown ${i + 1}`, () => {
      cy.get(`[data-cy=dropdown-input-${i + 1}]`).click()
      cy.get(`[data-cy=dropdown-block-${i + 1}]`)
    })
  }

  it(`same option on two dropdowns doesn't caurse chart`, () => {
    for (let i = 1; i < 3; i++) {
      cy.get(`[data-cy=dropdown-input-${i}]`).click()
      cy.get(`[data-cy=dropdown-block-${i}]`)
      cy.get(`[data-cy=dropdown-block-${i}-2]`).click()
    }
    cy.get('[data-cy=chart-modal]').should('not.exist')
    cy.get('[data-cy=chart]').should('not.exist')
  })

  it(`different options on two dropdowns caurse chart`, () => {
    for (let i = 1; i < 3; i++) {
      cy.get(`[data-cy=dropdown-input-${i}]`).click()
      cy.get(`[data-cy=dropdown-block-${i}]`)
      cy.get(`[data-cy=dropdown-block-${i}-${i + 2}]`).click()
    }
    cy.get('[data-cy=chart-modal]')
    cy.get('[data-cy=chart]')
  })

  it(`currency card appear after option is chosen`, () => {
    cy.get('[data-cy=CAD').should('not.exist')
    cy.get(`[data-cy=dropdown-input-1`).click()
    cy.get(`[data-cy=dropdown-block-1-1]`).click()
    cy.get('[data-cy=CAD')
  })

  it('change chart param intup type', () => {
    cy.get('[data-cy=custom-data-form]').should('not.exist')
    cy.get('[data-cy=input-type-button]').click()
    cy.get('[data-cy=custom-data-form]')
  })

  it('check custom data form', () => {
    cy.get('[data-cy=input-type-button]').click()
    cy.get('[data-cy=custom-data-input]')
    cy.get('[data-cy=custom-data-button]')
  })

  it('chart is not on page', () => {
    cy.get('[data-cy=input-type-button]').click()
    cy.get('[data-cy=chart-modal').should('not.exist')
    cy.get('[data-cy=chart').should('not.exist')
  })

  it('chart appear after custom input ', () => {
    cy.get('[data-cy=input-type-button]').click()
    for (let i = 0; i < 31; i++) {
      cy.get('[data-cy=custom-data-input]').type(Math.random().toString())
      cy.get('[data-cy=custom-data-button]').click()
      if (i !== 30) {
        cy.get('[data-cy=custom-data-input]').clear()
      }
    }
    cy.get('[data-cy=chart-modal]')
    cy.get('[data-cy=chart]')
  })

  it('get back to API chart', () => {
    cy.get('[data-cy=input-type-button]').click()
    cy.get('[data-cy=input-type-button]').click()
    cy.get(`[data-cy=dropdown-input-1`)
    cy.get(`[data-cy=dropdown-input-2`)
  })
})
