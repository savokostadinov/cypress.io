import { LoginMethods } from "cypress/pageObjects/login/login.methods"
describe("Add element to basket and remove the same element", () =>{
    it("Add element to basket and remove the same element", () =>{
        var login = new LoginMethods();
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login("savokostadinov@gmail.com", "savo123");
        login.verifySuccessfullLogin();
        cy.get('[aria-label="Add to Basket"]').first().click()
        cy.get('[aria-label="Show the shopping cart"]').click()
        cy.get('mat-row').should('be.visible')
        cy.get('mat-cell').last().find('button').click()
        cy.get('mat-row').should('not.exist')
    })
})