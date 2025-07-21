import testData from "../support/testData";
const loginData = testData.loginData;
class LoginPage {
  login() {
    cy.get("li.dropdown")
      .first()
      .within(() => {
        cy.get('a[title="My Account"]').click();
        cy.get("ul.dropdown-menu").should("be.visible");
        cy.contains("a", "Login").click();
      });
  }
  checkLoginPage() {
    cy.url().should("include", "account/login");
  }

  uiVisibility() {
    cy.get(".well h2").last().should("have.text", "Returning Customer");
    cy.get(".well p").last().should("have.text", "I am a returning customer");
    cy.get(".form-group label").first().should("have.text", "E-Mail Address");
    cy.get("#input-email")
      .should("be.visible")
      .and("have.attr", "placeholder", "E-Mail Address");
    cy.get(".form-group label").last().should("have.text", "Password");
    cy.get("#input-password")
      .should("be.visible")
      .and("have.attr", "placeholder", "Password");
    cy.get(".form-group a")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://tutorialsninja.com/demo/index.php?route=account/forgotten"
      );

    cy.get('input[type="submit"]').should("be.visible").and("be.enabled");
    cy.get('input[type="submit"]').should("have.attr", "value", "Login");
    cy.get('input[type="submit"]').click();
    cy.wait(10000);
    cy.go(-1);
  }
  emptyCredential() {
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and(
        "contain.text",
        "Warning: No match for E-Mail Address and/or Password."
      );
    cy.wait(1000);
    cy.go(-1);
  }
  emptyPassword() {
    cy.get("#input-email").should("be.visible").type("Raj");
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and(
        "contain.text",
        "Warning: No match for E-Mail Address and/or Password."
      );
    cy.wait(1000);
    cy.go(-1);
  }
  invalidEmail() {
    cy.get("#input-email").should("be.visible").type("xyz@123");
    cy.get("#input-password").should("be.visible").type("Joh@123");
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and(
        "contain.text",
        "Warning: No match for E-Mail Address and/or Password."
      );
    cy.wait(1000);
    cy.go(-1);
  }
  unregisteredEmail() {
    cy.get("#input-email").should("be.visible").type("xyz@123");
    cy.get("#input-password").should("be.visible").type("Joh@123");
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and(
        "contain.text",
        "Warning: No match for E-Mail Address and/or Password."
      );
    cy.wait(1000);
    cy.go(-1);
  }
  incorrectPassword() {
    cy.get("#input-email").should("be.visible").type(loginData.email);
    cy.get("#input-password").should("be.visible").type("Joha12344");
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and(
        "contain.text",
        "Warning: No match for E-Mail Address and/or Password."
      );
    cy.wait(1000);
    cy.go(-1);
  }
  enterCredential() {
    cy.get("#input-email").should("be.visible").type(loginData.email);
    cy.get("#input-password").should("be.visible").type(loginData.password);
    cy.get('input[type="submit"]').click();
    cy.url().should("include", "account/account");
    cy.contains("My Account").should("be.visible");
  }
}

export default LoginPage;
