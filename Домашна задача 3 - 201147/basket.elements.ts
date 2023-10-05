export class BasketElements{
    static get BasketElements(){
        return{
            getMatRowElement: () => cy.get('mat-row')
        }
    }
}