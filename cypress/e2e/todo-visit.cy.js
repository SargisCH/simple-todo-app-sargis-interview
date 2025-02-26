
describe('Users test', () => {
  it('creates users', () => {
    cy.visit('localhost:3000/users')
    cy.get('[type="text"]').type('User one')
    cy.get('[type="submit"]').click()
    cy.get('[type="text"]').type('User two')
    cy.get('[type="submit"]').click()
    cy.get("li").should('have.length', 2)

  })
})