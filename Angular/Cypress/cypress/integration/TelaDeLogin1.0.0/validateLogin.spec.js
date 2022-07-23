/// <reference types="cypress" />

describe('Validate messages when clicked on login', () => {
    
    before(() => {
        cy.visit('http://localhost:4200/');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('validate error message ', () => {

        cy.get('#inputEmail')
            .type('teste')
            .should('have.value', 'teste');
        
        cy.get('#inputPassword')
            .type('123')
            .should('have.value', '123');
        
        cy.get('#loginButton')
            .click();
        
        cy.get('#erroAlert')
            .should('be.visible', {delay: 200})
            .should('contain', 'Usuário e/ou senha incorretos.');
        
    })

    it('validate success message ', () => {

        cy.get('#inputEmail')
            .type('teste@teste.com')
            .should('have.value', 'teste@teste.com');
        
        cy.get('#inputPassword')
            .type('12345')
            .should('have.value', '12345');
        
        cy.get('#loginButton')
            .click();
        
        cy.get('#successAlert')
            .should('be.visible', {delay: 200})
            .should('contain', 'Usuário e/ou senha corretos.');
        
    })

    it('validate link', () => {

        cy.get('.link')
            .should('have.text', 'Forgot password? Click here');

        cy.get('.link')
            .click();

        cy.url()
            .should('be.equal', 'http://localhost:4200/#', {delay: 200});
    })
})