class checkoutFlow {
  goToCheckout() {
    cy.get("#cart").click();
    cy.contains("Checkout").click();
    cy.url().should("include", "checkout");
  }

  chooseGuestCheckout() {
    cy.get('input[value="guest"]').check({ force: true });
    cy.get("#button-account").click();
  }

  checkoutVisibility() {
    cy.get(":nth-child(5) > a > .fa").should("be.visible");
  }

  checkoutButton() {
    cy.get(":nth-child(5) > a > .fa").click();
  }

  unavailable() {
    cy.get("#checkout-cart .alert").should(
      "have.text",
      "Products marked with *** are not available in the desired quantity or not in stock!"
    );
  }
  continueShopping() {
    cy.get("#content .pull-left").should("be.visible").click();
    cy.get(-1);
  }
}
export default checkoutFlow;
