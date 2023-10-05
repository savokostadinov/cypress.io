import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";
import { BasketMethods } from "cypress/pageObjects/basket/basket.methods";
describe("Searching product Out Of Stock with Page Object Model", () =>{
    it("Searcing product Out Of Stock with Page Object Model", () =>{
        var login = new LoginMethods();
        var product = new ProductMethods();
        var basket = new BasketMethods();
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login("savokostadinov@gmail.com", "savo123");
        login.verifySuccessfullLogin();
        product.addItemToBasket("King of the Hill")
        basket.checkElementNotInBasket()
    })
})