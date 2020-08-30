describe('Registratioin', () => {
  
    it('Failed login without password and email typing', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.button')
        .click()
      cy.scrollTo('top')
    })
  
    it('Failed login', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#email')
        .type('mustafa@sulzer.de')
      cy.get('#password')
        .type('ksjdfhkjdfsdf')
      cy.get('.button')
        .click()
      cy.scrollTo('top')
    })
  
    it('Successful login', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#email')
        .type('mustafa@sulzer.de')
      cy.get('#password')
        .type('Password1!')
      cy.get('.button')
        .click()
      cy.scrollTo('top')
    })
  
  })
  