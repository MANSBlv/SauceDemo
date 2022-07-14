import BasePage from "./BasePage";

class RemoveButtonPage extends BasePage{

    static get RemoveButton(){
        return cy.get('#remove-sauce-labs-bolt-t-shirt');
    }
    
}
export default RemoveButtonPage;

