import { LoginMethods } from "cypress/pageObjects/login/login.methods"
describe("Searching product Out of Stock and validating", () =>{
    it("Searching product Out of Stock and validating", () =>{
        var login = new LoginMethods();
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login("savokostadinov@gmail.com", "savo123");
        login.verifySuccessfullLogin();
        cy.get('.mat-search_icon-search').click()
        cy.get('input').first().type("King of the Hill").type('{enter}')
        cy.get('[aria-label="Add to Basket"]').first().click()
        cy.get('[aria-label="Show the shopping cart"]').click()
        cy.get('mat-row').should('not.exist')
    })
})