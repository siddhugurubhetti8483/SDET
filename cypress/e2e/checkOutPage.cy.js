import checkoutFlow from "../Pages/CheckoutFlow";
import CartFunction from "../Pages/CartFunctionality";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const checkout = new checkoutFlow();
const cart = new CartFunction();
const home = new HomePage();
const login = new LoginPage();
describe("", () => {
  beforeEach(() => {
    home.visitPage();
    home.addProduct();
  });

  it("Navigate to Checkout", () => {
    checkout.goToCheckout();
  });

  it("Check Checkout button visible in homepage", () => {
    home.visitPage();
    checkout.checkoutVisibility();
  });

  it("Product Not available regarding checkout", () => {
    cart.goToCartPage();
    checkout.unavailable();
  });

  it("Continue Shopping Button working/Not in Checkout Page ", () => {
    cart.goToCartPage();
    checkout.continueShopping();
  });

  it("After login go to checkout page", () => {
    login.login();
    login.enterCredential();
    cart.goToCartPage();
    checkout.checkoutVisibility();
    checkout.checkoutButton();
  });
});
