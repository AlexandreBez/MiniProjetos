/// <reference types="cypress" />

describe('Validate alert messages shouldnt exist', () => {

    it('check the non existence of the alert messages', () => {
        
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.be.visible');
        
        cy.get('#emptyError')
            .should('not.be.visible');

        cy.get('#alertDeleted')
            .should('not.be.visible');
    });
});



describe('Validate not empty task', () =>{

    it('try create Low task with empty value and show error alert and dissapear after 5 sec', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ----------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#btnLowTask')
            .click();

        // ----------------------------

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('exist');

        cy.get('#emptyError', {timeout: 6000})
            .should('not.exist');
    })

    it('try create Medium task with empty value and show error alert and dissapear after 5 sec', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // -------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#btnMediumTask')
            .click();

        // -------------------------------

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('exist');

        cy.get('#emptyError', {timeout: 6000})
            .should('not.exist');
    })

    it('try create High task with empty value and show error alert and dissapear after 5 sec', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#btnHighTask')
            .click();

        // -----------------------------

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('exist');

        cy.get('#emptyError', {timeout: 6000})
            .should('not.exist');

    })
})



describe('Create Tasks and validate if exist', () => {

    it('Create Low task and validate if exist', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');
    })

    it('Create Medium task and validate if exist', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Medium task test');

        cy.get('#taskInput')
            .should('have.value','Medium task test');
            
        cy.get('#btnMediumTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Medium');

        cy.get('em')
            .should('contain', 'Medium task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');
    })

    it('Create High task and validate if exist', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('High task test');

        cy.get('#taskInput')
            .should('have.value','High task test');
            
        cy.get('#btnHighTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'High');

        cy.get('em')
            .should('contain', 'High task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');
    })
})



describe('Create Tasks and delete', () => {

    it('Create one task and delete', () =>  {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#createdSuccess')
            .should('not.exist');

        // delete by last added the High task

        cy.get('#deleteLast')
            .click();

        cy.get(':nth-child(1) > .modalAux')
            .should('exist');

        cy.get('#msgModal1')
            .should('have.text', 'Confirm task delete?');

        cy.get(':nth-child(1) > .modalAux > #btnYes')
            .click();

        cy.get('#alertDeleted')
            .should('exist');

        cy.get('app-task-list > p')
            .should('not.exist');

        cy.get('#alertDeleted', {timeout: 6000})
            .should('not.exist');
    })

    it('Create three tasks, validate if exist and delete the last one added and empty the list', () => {

        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // low task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#createdSuccess')
            .should('not.exist');

        // medium task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Medium task test');

        cy.get('#taskInput')
            .should('have.value','Medium task test');
            
        cy.get('#btnMediumTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(2) > p > strong')
            .should('contain', 'Medium');

        cy.get(':nth-child(2) > p > em')
            .should('contain', 'Medium task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        // high task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('High task test');

        cy.get('#taskInput')
            .should('have.value','High task test');
            
        cy.get('#btnHighTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(3) > p > strong')
            .should('contain', 'High');

        cy.get(':nth-child(3) > p > em')
            .should('contain', 'High task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        // delete by last added the High task

        cy.get('#deleteLast')
            .click();

        cy.get(':nth-child(1) > .modalAux')
            .should('exist');

        cy.get('#msgModal1')
            .should('have.text', 'Confirm task delete?');

        cy.get(':nth-child(1) > .modalAux > #btnYes')
            .click();

        cy.get('#alertDeleted')
            .should('exist');

        cy.get(':nth-child(3) > p')
            .should('not.exist');

        cy.get('#alertDeleted', {timeout: 6000})
            .should('not.exist');

        // delete by last added (Medium task)

        cy.get('#deleteLast')
            .click();
    
        cy.get(':nth-child(1) > .modalAux')
            .should('exist');
    
        cy.get('#msgModal1')
            .should('have.text', 'Confirm task delete?');
    
        cy.get(':nth-child(1) > .modalAux > #btnYes')
            .click();
    
        cy.get('#alertDeleted')
            .should('exist');
    
        cy.get(':nth-child(2) > p')
            .should('not.exist');
    
        cy.get('#alertDeleted', {timeout: 6000})
            .should('not.exist');
        
        // delete by last added (Low task)

        cy.get('#deleteLast')
            .click();
    
        cy.get(':nth-child(1) > .modalAux')
            .should('exist');
    
        cy.get('#msgModal1')
            .should('have.text', 'Confirm task delete?');
    
        cy.get(':nth-child(1) > .modalAux > #btnYes')
            .click();
    
        cy.get('#alertDeleted')
            .should('exist');
    
        cy.get('.container-fluid > :nth-child(1) > p')
            .should('not.exist');
    
        cy.get('#alertDeleted', {timeout: 6000})
            .should('not.exist');
    })
})

describe('validate tasks created and delete all', () => {

    it('create tasks and delete all', () => {
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // low task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#createdSuccess')
            .should('not.exist');

        // medium task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Medium task test');

        cy.get('#taskInput')
            .should('have.value','Medium task test');
            
        cy.get('#btnMediumTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(2) > p > strong')
            .should('contain', 'Medium');

        cy.get(':nth-child(2) > p > em')
            .should('contain', 'Medium task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        // high task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('High task test');

        cy.get('#taskInput')
            .should('have.value','High task test');
            
        cy.get('#btnHighTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(3) > p > strong')
            .should('contain', 'High');

        cy.get(':nth-child(3) > p > em')
            .should('contain', 'High task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');
  
        // delete all tasks

        cy.get('#deleteAll')
            .click();
        
        cy.get(':nth-child(2) > .modalAux')
            .should('exist');

        cy.get('#msgModal2')
            .should('have.text', 'Confirm delete all tasks?');

        cy.get(':nth-child(2) > .modalAux > #btnYes')
            .click();

        cy.get('#alertDeleted')
            .should('exist');
        
        cy.get('.container-fluid > :nth-child(1) > p')
            .should('not.exist');

        cy.get('.container-fluid > :nth-child(2) > p')
            .should('not.exist');

        cy.get('.container-fluid > :nth-child(2) > p')
            .should('not.exist');

        cy.get('#alertDeleted', {timeout: 6000})
            .should('exist');
    })
})



describe('Create tasks and cancel delete last', () => {

    it('Create one task, cancel delete last and validate if task exist', () => {
        
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#deleteLast')
            .click();
        
        cy.get(':nth-child(1) > .modalAux')
            .should('exist');

        cy.get(':nth-child(1) > .modalAux > #btnCancel')
            .click();

        cy.get('#alertDeleted')
            .should('not.exist');
            
        cy.get('app-task-list > p')
            .should('exist');
    })

    it('Create three tasks, cancel de delete last and validate if the three existe', () => {
        
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // low task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#createdSuccess')
            .should('not.exist');

        // medium task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Medium task test');

        cy.get('#taskInput')
            .should('have.value','Medium task test');
            
        cy.get('#btnMediumTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(2) > p > strong')
            .should('contain', 'Medium');

        cy.get(':nth-child(2) > p > em')
            .should('contain', 'Medium task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        // high task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('High task test');

        cy.get('#taskInput')
            .should('have.value','High task test');
            
        cy.get('#btnHighTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(3) > p > strong')
            .should('contain', 'High');

        cy.get(':nth-child(3) > p > em')
            .should('contain', 'High task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#deleteLast')
            .click();

        cy.get(':nth-child(1) > .modalAux')
            .should('exist');

        cy.get(':nth-child(1) > .modalAux > #btnCancel')
            .click();

        cy.get('#alertDeleted')
            .should('not.exist');

        cy.get('.container-fluid > :nth-child(1) > p')
            .should('exist');

        cy.get(':nth-child(2) > p')
            .should('exist');
        
        cy.get(':nth-child(3) > p')
            .should('exist');

    })
})



describe('Create tasks and cancel delete all', () => {

    it('Create one task, cancel delete all and validate if task exist', () => {
        
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // ------------------------------

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#deleteAll')
            .click();
        
        cy.get(':nth-child(2) > .modalAux')
            .should('exist');

        cy.get(':nth-child(2) > .modalAux > #btnCancel')
            .click();

        cy.get('#alertDeleted')
            .should('not.exist');
            
        cy.get('app-task-list > p')
            .should('exist');
    })

    it('Create three tasks, cancel de delete all and validate if the three existe', () => {
        
        cy.visit('http://localhost:4200/');

        cy.get('#createdSuccess')
            .should('not.exist');

        cy.get('#emptyError')
            .should('not.exist');

        // low task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Low task test');

        cy.get('#taskInput')
            .should('have.value','Low task test');
            
        cy.get('#btnLowTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get('strong')
            .should('contain', 'Low');

        cy.get('em')
            .should('contain', 'Low task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#createdSuccess')
            .should('not.exist');

        // medium task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('Medium task test');

        cy.get('#taskInput')
            .should('have.value','Medium task test');
            
        cy.get('#btnMediumTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(2) > p > strong')
            .should('contain', 'Medium');

        cy.get(':nth-child(2) > p > em')
            .should('contain', 'Medium task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        // high task

        cy.get('#taskInput')
            .should('be.empty');

        cy.get('#taskInput')
            .type('High task test');

        cy.get('#taskInput')
            .should('have.value','High task test');
            
        cy.get('#btnHighTask')
            .click();
        
        // ----------------------------
        
        cy.get('#createdSuccess')
            .should('exist');

        cy.get(':nth-child(3) > p > strong')
            .should('contain', 'High');

        cy.get(':nth-child(3) > p > em')
            .should('contain', 'High task test');

        cy.get('#createdSuccess')
            .should('exist');

        cy.get('#createdSuccess', {timeout: 6000})
            .should('not.exist');

        cy.get('#deleteAll')
            .click();

        cy.get(':nth-child(2) > .modalAux')
            .should('exist');

        cy.get(':nth-child(2) > .modalAux > #btnCancel')
            .click();

        cy.get('#alertDeleted')
            .should('not.exist');

        cy.get('.container-fluid > :nth-child(1) > p')
            .should('exist');

        cy.get(':nth-child(2) > p')
            .should('exist');
        
        cy.get(':nth-child(3) > p')
            .should('exist');

    })
})