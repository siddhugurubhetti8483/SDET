class ProductDetail {
  clickProduct() {
    cy.get(".product-thumb a").first().click({ multiple: true });
    cy.url().should("include", "product_id");
  }
  productVisible() {
    //Image
    cy.get(".thumbnails").each(($el) => {
      cy.wrap($el).find(".thumbnail img").should("be.visible");
    });
    cy.get(".thumbnails").each(($el) => {
      cy.wrap($el).find(".thumbnail img").should("be.visible");
    });
    //Product Name
    cy.get(".col-sm-4 h1").should("be.visible");
    //Price
    cy.get(".col-sm-4 .list-unstyled h2").should("be.visible");
  }
  productDescription() {
    cy.get("#tab-description").should("be.visible");
  }
  productSpecification() {
    cy.get("#tab-description").should("be.visible");
  }
  productReview() {
    cy.get(".col-sm-8 > .nav > :nth-child(3) > a").should("be.visible");
  }
  productQnt() {
    cy.get('#product input[name="quantity"]').should("be.visible");
    cy.get('#product input[name="quantity"]').clear().type("2");
  }
  addCartButton() {
    cy.get("#product button").should("be.visible");
  }
  productWishList() {
    cy.get(".col-sm-4 .btn-group button")
      .should("be.visible")
      .click({ multiple: true });
  }
}

export default ProductDetail;
