import { Body, Status } from '../BodyTicket/jsonTicket'


describe('teste de API Helpdesk - Tickets', () => {



    it("Creates a new ticket", () => {
        cy.CreateTickt(Body)
            .then((response) => {
                expect(response.status).to.eql(201)
                cy.log(JSON.stringify(response.body))
                Cypress.env('id', response.body.id)
                Cypress.env('status', response.body.status)

            })
    });



    it("Fetches a Ticket by ID", () => {
        cy.Get_Ticket_Id()
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });


    it("Updates Status data", () => {
        cy.Put_Ticket_Status(Status)
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });



    it("Deletes Ticket", () => {
        cy.DeleteTicket()
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });

});