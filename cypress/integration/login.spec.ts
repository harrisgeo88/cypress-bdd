describe('given a Login page', () => {
  describe('when attempting to login with invalid details', () => {
    it('should not allow us to login', () => {
      cy.visit('/login')
      cy.findByTestId('username').type('harrisgeo88')
      cy.findByTestId('password').type('password1')
      cy.findByTestId('submit').click()
      cy.findByTestId('loggedin').should('not.be.visible')
    })
  })
  describe('when attempting to login with valid details', () => {
    it('should login', () => {
      cy.visit('/login')
      cy.findByTestId('username').type('harrisgeo88')
      cy.findByTestId('password').type('pass')
      cy.findByTestId('submit').click()
      cy.findByTestId('loggedin').should('be.visible')
    })
  })
})
