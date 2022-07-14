import BasePage from "./BasePage";

class ItemsPage extends BasePage{

    static get Items(){
        return cy.get('[class="inventory_item"]');
    }

    static get SortItems(){
        return cy.get('[class="product_sort_container"]');
    }

}
export default ItemsPage;

