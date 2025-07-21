import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
// import testData from "../support/testData";

const login = new LoginPage();
const home = new HomePage();

describe("Login Page", () => {
  beforeEach(() => {
    home.visitPage();
    login.login();
  });
  it("Check login Page After Redirect", () => {
    login.checkLoginPage();
  });
  it("Check UI Visibility", () => {
    login.uiVisibility();
  });
  it("Blank email and password", () => {
    login.emptyCredential();
  });
  it("Invalid email, valid password", () => {
    login.invalidEmail();
  });
  it("Valid email, blank password", () => {
    login.emptyPassword();
  });
  it("Unregistered email", () => {
    login.unregisteredEmail();
  });
  it("Invalid password", () => {
    login.incorrectPassword();
  });
  it("Enter Correct Credential", () => {
    login.enterCredential();
  });
});
