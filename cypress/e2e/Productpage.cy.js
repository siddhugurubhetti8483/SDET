import ProductDetail from "../Pages/ProductDetail";
import HomePage from "../Pages/HomePage";

const product = new ProductDetail();
const home = new HomePage();

describe("Product Detailed Page", () => {
  beforeEach(() => {
    home.visitPage();
    product.clickProduct();
  });

  it("Product Price, name, Image visibility", () => {
    product.productVisible();
  });
  it("Product description", () => {
    product.productDescription();
  });
  it("Product Specification", () => {
    product.productSpecification();
  });
  it("Product Review", () => {
    product.productReview();
  });
  it("Product Quantity", () => {
    product.productQnt();
  });
  it("Product Add to Cart", () => {
    product.addCartButton();
  });
  it("Add Wishlist of product", () => {
    product.productWishList();
  });
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
  //   it("", () => {});
});
