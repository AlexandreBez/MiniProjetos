/// <reference types="cypress" />

describe('Validate messages when clicked on login', () => {

    before(() => {
        cy.visit('http://localhost:4200/');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Error message for empty task input', () => {

        cy.get('#errorAlert')
            .should('not.be.visible');

        cy.get('#taskInput')
            .should('be.empty')
            .should('be.visible');

        cy.get('button')
            .should('have.text', 'Create Task')
            .click();

        cy.get('#errorAlert')
            .should('contains', 'Task can be empty.');
        
    });

    it('Create one task', () => {

        cy.get('#errorAlert')
            .should('not.be.visible');

        cy.get('#taskInput')
            .type('Make dinner')
            .should('have.value', 'Make dinner');

        cy.get('button')
            .should('have.text', 'Create Task')
            .click();

        cy.get('#colTask')
            .should('have.text', 'Make dinner');
        
    });

    it('Delete one task', () => {

        cy.get('#errorAlert')
            .should('not.be.visible');

        cy.get('#taskInput')
            .type('Make dinner')
            .should('have.value', 'Make dinner');

        cy.get('button')
            .should('have.text', 'Create Task')
            .click();

        cy.get('#colTask')
            .should('have.text', 'Make dinner');

        cy.get('#removeButton').click();

        cy.get('#colTask')
            .should('not.have.text', 'Make dinner');        
        
    });

    it('Create more then one task', () => {

        cy.get('#errorAlert')
            .should('not.be.visible');


        cy.get('#taskInput')
            .type('Make dinner I')
            .should('have.value', 'Make dinner I');

        cy.get('button')
            .should('have.text', 'Create Task')
            .click();
            

        cy.get('#taskInput')
            .type('Make dinner II')
            .should('have.value', 'Make dinner II');

        cy.get('button').click();


        cy.get('#taskInput')
            .type('Make dinner III')
            .should('have.value', 'Make dinner III');

        cy.get('button').click();

        
  
        cy.get('#removeButton').click();

        cy.get('#colTask')
            .should('not.have.text', 'Make dinner III');


        cy.get('#removeButton').click();

        cy.get('#colTask')
            .should('not.have.text', 'Make dinner II');


        cy.get('#removeButton').click();

        cy.get('#colTask')
            .should('not.have.text', 'Make dinner I');
    });
})