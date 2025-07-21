class CartFunction {
  openCart() {
    cy.get("#cart").click();
  }
  verifyProductAdded(productName) {
    cy.get("#cart").click();
    cy.get("#cart > .dropdown-menu").should("contain", productName);
  }

  addMultiple(productName) {
    cy.contains(productName)
      .scrollIntoView()
      .should("be.visible")
      .parents(".product-thumb")
      .within(() => {
        cy.contains("Add to Cart").click();
      });

    cy.get("#cart-total").should("not.contain", "0 item(s)");
  }

  goToCartPage() {
    cy.get("#cart").click();
    cy.contains("View Cart").click();
  }

  updateQuantity(qty) {
    cy.get('.table-responsive input[name*="quantity"]').clear().type(qty);
    cy.get(
      ":nth-child(4) > .input-group > .input-group-btn > .btn-primary"
    ).click();
  }

  verifyQuantityUpdated(qty) {
    cy.get('.table-responsive input[name*="quantity"]').should(
      "have.value",
      qty
    );
  }

  removeProduct() {
    cy.get(".input-group-btn > .btn-danger").click();
  }

  verifyCartEmpty() {
    cy.get("#content").should("contain", "Your shopping cart is empty!");
  }

  verifyCartAfterLogin() {
    cy.get("#cart").click();
    cy.get(".dropdown-menu").should(
      "not.contain",
      "Your shopping cart is empty!"
    );
  }

  cartNumber() {
    cy.get("#cart-total").then((cartText) => {
      expect(cartText.text()).to.match(/\d+ item/);
    });
  }
  cartPrice(){
    cy.get(".table-responsive td:last-child")
      .last()
      .invoke("text")
      .then((text) => {
        const price = parseFloat(text.replace("$", ""));
        expect(price).to.be.greaterThan(0);
      });
  }
}

export default CartFunction;
