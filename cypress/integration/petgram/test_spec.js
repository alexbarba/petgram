/* global describe, it, cy */
describe('Petgram', function () {
  it('Para ver si la app funciona', function () {
    cy.visit('/')
  })
  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })
})
