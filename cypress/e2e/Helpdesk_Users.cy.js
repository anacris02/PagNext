import {body,bodyExist} from '../BodyUser/JsonFactory'
import bodyUpdate from '../BodyUser/JsonFactory02'


describe('teste de API Helpdesk - Users', () => {


    it("Lists all users", () => {
        cy.Get_All_Users()
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
                cy.log(response.body.id)

            });
    });

    it("Creates a new user Existente", () => {
        cy.CreateUserExist(bodyExist)
            .then((response) => {
                expect(response.status).to.eql(409)
                cy.log(JSON.stringify(response.body))
            })
    });


    it("Creates a new user", () => {
        cy.CreateUser(body)
            .then((response) => {
                expect(response.status).to.eql(201)
                cy.log(JSON.stringify(response.body))
                Cypress.env('id', response.body.id)
            })
    });

    it("Fetches a user by ID", () => {
        cy.Get_Users_ID()
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });

    it("Fetches a user by ID Null", () => {
        cy.Get_Users_ID_Null()
            .then((response) => {
                expect(response.status).to.eql(404)
                cy.log(JSON.stringify(response.body))
            })
    });


    it("Updates user data", () => {
        cy.UpdateUser(bodyUpdate)
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });

    it("Deletes a user", () => {
        cy.DeleteUser()
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });

})