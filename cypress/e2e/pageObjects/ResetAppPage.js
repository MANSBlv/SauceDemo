import BasePage from "./BasePage";

class ResetAppPage extends BasePage{

    static get Burger(){
        return cy.get('#react-burger-menu-btn');
    }

    static get ResetApp(){
        return cy.get('#reset_sidebar_link');
    }

    static get Badge(){
        return cy.get('[class="shopping_cart_badge"]');
    }

}
export default ResetAppPage;