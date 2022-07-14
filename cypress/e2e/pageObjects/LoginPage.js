import BasePage from "./BasePage";

class LoginPage extends BasePage{

    static get url() {
        return "https://www.saucedemo.com";
      }

    static get Username(){
        return cy.get('#user-name');
    }

    static get Password(){
        return cy.get('#password');
    }

    static get LoginButton(){
        return cy.get('#login-button');
    }

    static get ErrorMessage(){
        return cy.get('[data-test="error"]');
    }

}
export default LoginPage;