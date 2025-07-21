class HomePage {
  //Base Url
  visitPage() {
    cy.visit("/");
  }
  //! Header
  //*Logo
  logoLink() {
    //logo href
    cy.get("#logo a").should(
      "have.attr",
      "href",
      "https://tutorialsninja.com/demo/index.php?route=common/home"
    );
  }
  logoRedirect() {
    cy.get("#logo a").click();
    cy.url().should("include", "route=common/home");
  }

  //*Navigation links Left Side
  displayDropDown() {
    cy.get("#form-currency .dropdown-toggle")
      .should("be.visible")
      .and("contain", "Currency");
  }
  currencyOption() {
    cy.get("#form-currency .dropdown-toggle").click();
    cy.get("#form-currency .dropdown-toggle").should("be.visible");
    cy.get(".dropdown-menu .currency-select").should("have.length", 3);
    cy.get(".dropdown-menu .currency-select").eq(0).should("contain", "Euro");
    cy.get(".dropdown-menu .currency-select")
      .eq(2)
      .should("contain", "US Dollar");
    cy.get(".dropdown-menu .currency-select")
      .eq(1)
      .should("contain", "Pound Sterling");
  }
  eurocurrency() {
    cy.get("#form-currency .dropdown-toggle").click();
    cy.get('.currency-select[name="EUR"]').click({ force: true });

    cy.get(".price").first().should("contain", "€");
  }
  poundCurrency() {
    cy.get("#form-currency .dropdown-toggle").click();
    cy.get('.currency-select[name="GBP"]').click();

    cy.get(".price").first().should("contain", "£");
  }
  dollarCurrency() {
    cy.get("#form-currency .dropdown-toggle").click();
    cy.get('.currency-select[name="USD"]').click();

    cy.get(".price").first().should("contain", "$");
  }

  //* Navigation links Right Side
  visibleLink() {
    cy.get("#top-links").should("be.visible");
  }
  visiblePhoneNum() {
    cy.get(".list-inline > li").eq(0).contains("123456789");
    cy.get(".fa-phone").should("be.visible");
  }
  myAccount() {
    cy.get("li.dropdown")
      .first()
      .within(() => {
        cy.get('a[title="My Account"]').click();
        cy.get("ul.dropdown-menu").should("be.visible");
        cy.contains("a", "Register")
          .should("have.attr", "href")
          .and("include", "account/register");
        cy.contains("a", "Login")
          .should("have.attr", "href")
          .and("include", "account/login");
      });
  }
  wishLink() {
    cy.get("#wishlist-total")
      .should("be.visible")
      .and("contain.text", "Wish List");
  }
  shoppingCart() {
    cy.get('a[title="Shopping Cart"]').should("be.visible");
  }
  checkOut() {
    cy.get('a[title="Checkout"]').should("be.visible");
  }

  //! Search bar
  searchBarVisibility() {
    cy.get('input[name="search"]').should("be.visible");
  }

  //! Cart visibility
  cartVisibility() {
    cy.get("#cart").should("be.visible");
  }
  cartText() {
    cy.get("#cart-total").should("contain", "0 item(s) - $0.00");
  }
  clickCart() {
    cy.get("#cart").click();
    cy.get(".dropdown-menu").should("be.visible");
    cy.get(".dropdown-menu p").should(
      "have.text",
      "Your shopping cart is empty!"
    );
  }
  addProduct() {
    cy.contains("MacBook")
      .parents(".product-thumb")
      .within(() => {
        cy.contains("Add to Cart").click();
      });
    cy.get("#cart-total").should("not.contain.text", "0 item(s)");
  }

  //! NavBar
  visibleNavbar() {
    cy.get("#menu").should("be.visible");
  }
  navDesktop() {
    cy.get("a.dropdown-toggle").contains("Desktops").trigger("mouseover");
    cy.get("a.dropdown-toggle").contains("Desktops").click();
    cy.get(".dropdown-menu  li>a").contains("PC (0)").should("be.visible");
    cy.get(".dropdown-menu a").contains("Mac (1)").should("be.visible");
    cy.get(".dropdown-menu a")
      .contains("Show AllDesktops")
      .should("be.visible");
  }
  desktopPage() {
    cy.get("a.dropdown-toggle").contains("Desktops").trigger("mouseover");
    cy.get(".dropdown-menu a").contains("Mac (1)").click();
    cy.url().should("include", "path=20_27");
    cy.get("h2").should("contain.text", "Mac");
  }
  navLaptopNotebook() {
    cy.get("a.dropdown-toggle")
      .contains("Laptops & Notebooks")
      .trigger("mouseover");
    cy.get("a.dropdown-toggle").contains("Laptops & Notebooks").click();
    cy.get(".dropdown-menu").contains("Macs (0)").should("be.visible");
    cy.get(".dropdown-menu").contains("Windows (0)").should("be.visible");
    cy.get(".dropdown-menu")
      .contains("Show AllLaptops & Notebooks")
      .should("be.visible");
  }
  navComponents() {
    cy.get("a.dropdown-toggle").contains("Components").trigger("mouseover");
    cy.get("a.dropdown-toggle").contains("Components").click();
    cy.get(".dropdown-menu")
      .contains("Mice and Trackballs (0)")
      .should("be.visible");
    cy.get(".dropdown-menu").contains("Monitors (2)").should("be.visible");
    cy.get(".dropdown-menu").contains("Printers (0)").should("be.visible");
    cy.get(".dropdown-menu").contains("Scanners (0)").should("be.visible");
    cy.get(".dropdown-menu").contains("Web Cameras (0)").should("be.visible");
    cy.get(".dropdown-menu")
      .contains("Show AllComponents")
      .should("be.visible");
  }
  navTablet() {
    cy.get("li >a").contains("Tablets").should("be.visible").click();
    cy.url().should("include", "category&path=57");
  }
  navSoftware() {
    cy.get("li >a").contains("Software").should("be.visible").click();
    cy.url().should("include", "category&path=17");
  }
  navPhones() {
    cy.get("li >a").contains("Phones & PDAs").should("be.visible").click();
    cy.url().should("include", "category&path=24");
  }
  navCamera() {
    cy.get(":nth-child(7) > a")
      .contains("Cameras")
      .should("be.visible")
      .click();
    cy.url().should("include", "category&path=33");
  }
  navMP3Player() {
    cy.get("a.dropdown-toggle")
      .contains("MP3 Players")
      .trigger("mouseover")
      .click();
    cy.get(".dropdown-menu").contains("test 11 (0)").should("be.visible");
    cy.get(".dropdown-menu")
      .contains("Show AllMP3 Players")
      .should("be.visible");
  }

  //! Banner-Slider
  bannerVisibility() {
    cy.get("#slideshow0").first().should("be.visible");
  }
  getSlideNumber() {
    cy.get("#slideshow0 .swiper-wrapper").then(($el) => {
      const count = $el.find(".swiper-slide").length;
      cy.log(count);

      expect(count).to.be.equal(4);
    });
  }
  slideLink() {
    cy.get("#slideshow0 a")
      .should("have.attr", "href")
      .and("include", "product_id=49");
  }
  checkBannerImg() {
    cy.get("#slideshow0 img").each(($img) => {
      cy.wrap($img)
        .should("have.attr", "src")
        .and("include", "image/cache/catalog/demo/banners/");
      cy.wrap($img).should("have.attr", "alt").and("not.be.empty");
    });
  }
  bannerNextPreviousButton() {
    cy.get(".swiper-button-next").first().click();
    cy.wait(1000);
    cy.get(".swiper-button-prev").first().click();
  }
  displayPagination() {
    cy.get(".swiper-pagination-bullet").should("have.length.greaterThan", 1);
    cy.get(".swiper-pagination-bullet").eq(1).click();
  }

  //! Featured Products
  displayAllProd() {
    cy.get(".product-layout").should("have.length", 4);
  }
  //price, image, product name visibility
  productVisible() {
    cy.get(".product-layout").each(($el) => {
      cy.wrap($el).find(".image").should("be.visible");
      cy.wrap($el).find("h4 a").should("be.visible");
      cy.wrap($el).find("p.price").should("be.visible");
    });
  }
  //add to cart button visible
  cartButton() {
    cy.get(".product-layout").each(($el) => {
      cy.wrap($el).find(".button-group button").first().should("be.visible");
    });
  }
  //add macBook cart and check cart update
  addCartProd() {
    cy.contains("MacBook")
      .parents(".product-thumb")
      .within(() => {
        cy.contains("Add to Cart").click();
      });
    cy.get("#cart-total").should("contain", "1 item(s)");
  }
  //check price & tax Inf
  checkPrice() {
    cy.get(".product-layout").each(($el) => {
      cy.wrap($el).find(".price").should("contain", "Ex Tax:");
    });
  }
}

export default HomePage;
