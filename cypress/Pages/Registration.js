import testData from "../support/testData";
const data = testData.testUser;
class Registration {
  clickRegLink() {
    cy.get("li.dropdown")
      .first()
      .within(() => {
        cy.get('a[title="My Account"]').click();
        cy.get("ul.dropdown-menu").should("be.visible");
        cy.contains("a", "Register").click();
      });
  }
  enterDetails() {
    cy.get("#input-firstname").type(data.firstname);
    cy.get("#input-lastname").type(data.lastname);
    cy.get("#input-email").type(data.email);
    cy.get("#input-telephone").type(data.telephone);
    cy.get("#input-password").type("Password123");
    cy.get("#input-confirm").type("Password123");
    cy.get('input[name="newsletter"][value="1"]').check();
    cy.get('input[name="agree"]').check();
    cy.get('input[type="submit"][value="Continue"]').click();
    cy.url().should("include", "account/success");
  }
  emptyFields() {
    cy.get('input[type="submit"][value="Continue"]').click();
    cy.get(".text-danger").should("have.length.at.least", 1);
  }
  invalidEmail() {
    cy.get("#input-firstname").type("Test");
    cy.get("#input-lastname").type("User");
    cy.get("#input-email").type("invalid-email@ddf");
    cy.get("#input-telephone").type("1234567890");
    cy.get("#input-password").type("Password123");
    cy.get("#input-confirm").type("Password123");
    cy.get('input[name="agree"]').check();
    cy.get('input[type="submit"][value="Continue"]').click();

    cy.get(".text-danger").should(
      "contain",
      "E-Mail Address does not appear to be valid"
    );
  }
  mismatchPassword() {
    cy.get("#input-password").type("Password123");
    cy.get("#input-confirm").type("WrongPassword");
    cy.get('input[name="agree"]').check();
    cy.get('input[type="submit"][value="Continue"]').click();

    cy.get(".text-danger").should(
      "contain",
      "Password confirmation does not match password!"
    );
  }
  registerDuplicateEmail() {
    cy.get("#input-firstname").type(data.firstname);
    cy.get("#input-lastname").type(data.lastname);
    cy.get("#input-email").type("test@test.com");
    cy.get("#input-telephone").type("1234567890");
    cy.get("#input-password").type("Password123");
    cy.get("#input-confirm").type("Password123");
    cy.get('input[name="agree"]').check();
    cy.get('input[type="submit"][value="Continue"]').click();
  }
  policyNotChecked() {
    cy.get("#input-firstname").type(data.firstname);
    cy.get("#input-lastname").type(data.lastname);
    cy.get("#input-email").type(data.email);
    cy.get("#input-telephone").type(data.telephone);
    cy.get("#input-password").type("Password123");
    cy.get("#input-confirm").type("Password123");

    cy.get('input[type="submit"][value="Continue"]').click();

    cy.get(".alert-danger").should(
      "contain",
      "Warning: You must agree to the Privacy Policy!"
    );
  }
  loginLink() {
    cy.get(
      '.list-group > [href="https://tutorialsninja.com/demo/index.php?route=account/login"]'
    )
      .should("be.visible")
      .click();
    cy.url().should("include", "account/login");
  }
}

export default Registration;
