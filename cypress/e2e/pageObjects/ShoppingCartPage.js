import BasePage from "./BasePage";

class ShoppingCartPage extends BasePage{

    static get AddToCart(){
        return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    static get NumberOnCart(){
        return cy.get('#shopping_cart_container');
    }

    static get BackToProd(){
        return cy.get('#back-to-products');
    }

    static get AddToCartBike(){
        return cy.get('#add-to-cart-sauce-labs-bike-light');
    }

}
export default ShoppingCartPage;