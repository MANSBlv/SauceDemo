import BuyTshirtPage from "./pageObjects/BuyTshirtPage";
import ItemsPage from "./pageObjects/ItemsPage";
import LoginPage from "./pageObjects/Loginpage";
import RemoveButtonPage from "./pageObjects/RemoveButtonPage";
import ResetAppPage from "./pageObjects/ResetAppPage";
import ShoppingCartPage from "./pageObjects/ShoppingCartPage";


context("SwagLabs Page", () => {

  context("SwagLabs HomePage", () => {
    beforeEach(() => {
      LoginPage.visit();
    });
    /*it("Login", () => {
      LoginPage.Username.type('locked_out_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      LoginPage.ErrorMessage.contains('Epic sadface: Sorry, this user has been locked out.');

    });
    it("Login Wrong Password", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("123");
      LoginPage.LoginButton.click();
      LoginPage.ErrorMessage.contains('Epic sadface: Username and password do not match any user in this service');

    });
    it("Validate item amount", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.Items.should('have.length',6);
      //LoginPage.ErrorMessage.contains('Epic sadface: Username and password do not match any user in this service');

    });
    it("Sort items High to Low", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.SortItems.select('Price (high to low)');
      ItemsPage.Items.eq(0).contains('Sauce Labs Fleece Jacket');
      ItemsPage.Items.eq(0).contains('$49.99');

    });
    it("Sort items low to high", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.SortItems.select('Price (low to high)');
      ItemsPage.Items.eq(0).contains('Sauce Labs Onesie');
      ItemsPage.Items.eq(0).contains('$7.99');

    });
    it("Sort items Name (Z to A)", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.SortItems.select('Name (Z to A)');
      ItemsPage.Items.eq(0).contains('Test.allTheThings() T-Shirt (Red)');
    });
    it("Validate shopping cart badge amount", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.Items.contains('Sauce Labs Bolt T-Shirt').click();
      ShoppingCartPage.AddToCart.click();
      ShoppingCartPage.NumberOnCart.contains('1');
      ShoppingCartPage.BackToProd.click();
      ItemsPage.Items.contains('Sauce Labs Bike Light').click();
      ShoppingCartPage.AddToCartBike.click();
      ShoppingCartPage.NumberOnCart.contains('2');

    });*/
    /*it("Reset app State", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.Items.contains('Sauce Labs Bolt T-Shirt').click();
      ShoppingCartPage.AddToCart.click();
      ShoppingCartPage.BackToProd.click();
      ShoppingCartPage.NumberOnCart.contains('1');
      ResetAppPage.Burger.click();
      ResetAppPage.ResetApp.click();
      ResetAppPage.Badge.should('not.exist');
      //ShoppingCartPage.NumberOnCart.should('not.have');

    });
    it("Remove button", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.Items.contains('Sauce Labs Bolt T-Shirt').click();
      ShoppingCartPage.AddToCart.click();
      ShoppingCartPage.NumberOnCart.contains('1');
      RemoveButtonPage.RemoveButton.click();
      ResetAppPage.Badge.should('not.exist');
    });*/
    it("Buy tshirt page", () => {
      LoginPage.Username.type('standard_user');
      LoginPage.Password.type("secret_sauce");
      LoginPage.LoginButton.click();
      ItemsPage.Items.contains('Test.allTheThings() T-Shirt (Red)').click();
      BuyTshirtPage.OneItemPage.contains('Add to cart').click();
      ShoppingCartPage.NumberOnCart.click();
      BuyTshirtPage.Checkout.click();
      BuyTshirtPage.FirstName.type('Alex');
      BuyTshirtPage.LastName.type('Jones');
      BuyTshirtPage.Zip.type('Jones-1');
      BuyTshirtPage.ContinueButton.click();
      BuyTshirtPage.ValidateShirt.contains('Test.allTheThings() T-Shirt (Red)');
      BuyTshirtPage.Finish.click();
      BuyTshirtPage.ValidateMessage.contains('THANK YOU FOR YOUR ORDER');

    });
  });
 
});