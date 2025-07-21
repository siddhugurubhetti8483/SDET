import HomePage from "../Pages/HomePage";

const homePage = new HomePage();

describe("Home Page", () => {
  beforeEach(() => {
    homePage.visitPage();
  });
  it("Header Logo", () => {
    homePage.logoLink();
    homePage.logoRedirect();
  });

  it("Header Currency Navigation", () => {
    homePage.displayDropDown();
    homePage.currencyOption();
    homePage.eurocurrency();
    homePage.poundCurrency();
    homePage.dollarCurrency();
  });

  it("Navigation links Right Side", () => {
    homePage.visibleLink();
    homePage.visiblePhoneNum();
    homePage.myAccount();
    homePage.wishLink();
    homePage.shoppingCart();
    homePage.checkOut();
  });

  it("Search bar", () => {
    homePage.searchBarVisibility();
  });

  it("Cart Visibility & Add product", () => {
    homePage.cartVisibility();
    homePage.cartText();
    homePage.clickCart();
    homePage.addProduct();
  });

  it("Navigation Bar Navigate", () => {
    homePage.visibleNavbar();
    homePage.navDesktop();
    homePage.desktopPage();
    homePage.navLaptopNotebook();
    homePage.navComponents();
    homePage.navTablet();
    homePage.navSoftware();
    homePage.navPhones();
    homePage.navCamera();
    homePage.navMP3Player();
  });

  it("Banner", () => {
    homePage.bannerVisibility();
    homePage.getSlideNumber();
    homePage.slideLink();
    homePage.checkBannerImg();
    homePage.bannerNextPreviousButton();
    homePage.displayPagination();
  });

  it("Featured Products", () => {
    homePage.displayAllProd();
    homePage.productVisible();
    homePage.cartButton();
    homePage.addCartProd();
    homePage.checkPrice();
  });
});
