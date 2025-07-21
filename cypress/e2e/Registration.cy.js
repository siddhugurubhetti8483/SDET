import Registration from "../Pages/Registration";
import HomePage from "../Pages/HomePage";

const regPage = new Registration();
const home = new HomePage();

describe("Registration Page", () => {
  beforeEach(() => {
    home.visitPage();
    regPage.clickRegLink();
  });
  it("Enter registration Details", () => {
    regPage.enterDetails();
  });
  it("show error required fields are empty", () => {
    regPage.emptyFields();
  });
  it("Invalid email format", () => {
    regPage.invalidEmail();
  });
  it("Password and Confirm Password Mismatch", () => {
    regPage.mismatchPassword();
  });
  it("Already Registered Email", () => {
    regPage.registerDuplicateEmail();
  });
  it("Privacy Policy Not Checked", () => {
    regPage.policyNotChecked();
  });
  it("Check Login Link in Registration Page", () => {
    regPage.loginLink();
  });
});
