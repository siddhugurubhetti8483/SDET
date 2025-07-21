class Search {
  productSearch() {
    cy.get('input[name="search"]')
      .should("be.visible")
      .and("have.attr", "placeholder", "Search")
      .type("iPhone")
      .should("have.value", "iPhone");
  }
  searchInput() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').type("iPhone");
    cy.get("#search button").click();
    cy.url().should("include", "search");
  }
  searchPartialKeyword() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').type("mac");
    cy.get("#search button").click();
    cy.url().should("include", "search=mac");
  }

  searchInvalidInput() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').first().type("xyz");
    cy.get("#search button").click();
    cy.get("#content p").should(
      "contain",
      "There is no product that matches the search criteria."
    );
  }
  searchOneChar() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').type("m");
    cy.get("#search button").click();
    cy.url().should("include", "search=m");
  }
  searchNumericVal() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').type("1245");
    cy.get("#search button").click();
    cy.get("#content h1").first().should("have.text", "Search - 1245");
  }
  searchMixedCase() {
    cy.get('input[name="search"]').clear();
    cy.get('input[name="search"]').type("samsung1245");
    cy.get("#search button").click();
    cy.get("#content h1").first().should("have.text", "Search - samsung1245");
  }
  emptySearch() {
    cy.get('input[name="search"]').clear();
    cy.get("#search button").click();
    cy.get("#content h1").first().should("have.text", "Search");
  }
}

export default Search;
