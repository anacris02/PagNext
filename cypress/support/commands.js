// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
//Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('Get_All_Users', () => {
    cy.request({
        method: 'GET',
        url: '/users',
        failOnStatusCode: false
    })
});

Cypress.Commands.add('CreateUser', (body) => {
    cy.request({
        method: 'POST',
        url: '/users',
        body: body
    })
});

Cypress.Commands.add('CreateUserExist', (body) => {
    cy.request({
        method: 'POST',
        url: '/users',
        failOnStatusCode: false,
        body: body

    })
});

Cypress.Commands.add('Get_Users_ID', () => {
    cy.request({
        method: 'GET',
        url: '/users/' + Cypress.env('id'),

    })
});

Cypress.Commands.add('Get_Users_ID_Null', () => {
    cy.request({
        method: 'GET',
        url: '/users/0000',
        failOnStatusCode: false

    })
});

Cypress.Commands.add('UpdateUser', (body) => {
    cy.request({
        method: 'PUT',
        url: '/users/' + Cypress.env('id'),
        body: body
    })

})

Cypress.Commands.add('DeleteUser', () => {
    cy.request({
        method: 'DELETE',
        url: '/users/' + Cypress.env('id'),
    })

})

//-------------------------------------------------------------------//

// este comando cria tickets
Cypress.Commands.add('CreateTickt', (body) => {
    cy.request({
        method: 'POST',
        url: '/tickets',
        failOnStatusCode: false,
        body: body

    })
});

//este comando busca pelo id do ticket
Cypress.Commands.add('Get_Ticket_Id', () => {
    cy.request({
        method: 'GET',
        url: '/tickets/' + Cypress.env('id'),

    })
});

Cypress.Commands.add('Put_Ticket_Status', (body) => {
    cy.request({
        method: 'PUT',
        url: '/tickets/' + Cypress.env('id')+'/status',
        body: body

    })
});

Cypress.Commands.add('DeleteTicket', () => {
    cy.request({
        method: 'DELETE',
        url: '/tickets/' + Cypress.env('id'),
    })

});