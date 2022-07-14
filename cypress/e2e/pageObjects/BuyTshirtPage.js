import BasePage from "./BasePage";

class BuyTshirtPage extends BasePage{

    static get OneItemPage(){
        return cy.get('[class="inventory_details_desc_container"]');
    }
    
    static get Checkout(){
        return cy.get('#checkout');
    }

    static get FirstName(){
        return cy.get('#first-name');
    }

    static get LastName(){
        return cy.get('#last-name');
    }

    static get Zip(){
        return cy.get('#postal-code');
    }

    static get ContinueButton(){
        return cy.get('#continue');
    }

    static get ValidateShirt(){
        return cy.get('[class="cart_item_label"]');
    }

    static get Finish(){
        return cy.get('#finish');
    }

    static get ValidateMessage(){
        return cy.get('[class="complete-header"]');
    }
    
}
export default BuyTshirtPage;
