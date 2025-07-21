import CartFunction from "../Pages/CartFunctionality";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const cart = new CartFunction();
const home = new HomePage();
const login = new LoginPage();

describe("Cart Function", () => {
  beforeEach(() => {
    home.visitPage();
  });
  it("Cart icon remains visible", () => {
    home.cartVisibility();
  });
  it("Cart opens dropdown on click", () => {
    home.clickCart();
  });
  it("Add Product from featured product", () => {
    // home.visitPage();
    home.cartVisibility();
    home.cartText();
    home.clickCart();
    home.addProduct();
  });
  it("Check Product Added or not", () => {
    cart.addMultiple("MacBook");
    cart.verifyProductAdded("MacBook");
  });
  it("Add Multiple product in cart", () => {
    cart.addMultiple("iPhone");
    cart.addMultiple('Apple Cinema 30"');
    cart.verifyProductAdded("iPhone");
  });
  it("Update Cart Quantity", () => {
    cart.addMultiple("iPhone");
    cart.goToCartPage();
    cart.updateQuantity(3);
    cart.verifyQuantityUpdated("3");
  });
  it("Remove Product form cart", () => {
    cart.addMultiple("iPhone");
    cart.goToCartPage();
    cart.removeProduct();
    cart.verifyCartEmpty();
  });
  it("Cart Remain after login", () => {
    home.addProduct();
    login.login();
    cart.verifyCartAfterLogin();
  });
  it("Cart reflects accurate number of items", () => {
    cart.cartNumber();
  });

  it("View cart redirects to cart page", () => {
    cart.addMultiple("iPhone");
    cart.goToCartPage();
    cy.url().should("include", "route=checkout/cart");
  });

  it("Total price is displayed", () => {
    cart.addMultiple("iPhone");
    cart.goToCartPage();
    cart.cartPrice();
  });
});
