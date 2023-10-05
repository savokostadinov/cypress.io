import { BasketElements } from "./basket.elements";

export class BasketMethods{
    checkElementNotInBasket(){
        BasketElements.BasketElements.getMatRowElement().should('not.exist')
    }
}