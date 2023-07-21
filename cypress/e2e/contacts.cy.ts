import cypress from 'cypress'

describe('Test Contacts Page', () => {
  beforeEach(() => {
    cy.visit('/contacts')
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
  it('check contacts', () => {
    cy.get('[data-cy=contacts]')
  })
})
