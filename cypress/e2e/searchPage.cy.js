import Search from "../Pages/Search";
import HomePage from "../Pages/HomePage";

const search = new Search();
const home = new HomePage();
describe("Search Functionality", () => {
  beforeEach(() => {
    home.visitPage();
  });
  it("SearchBar Visible or Not", () => {
    home.searchBarVisibility();
  });
  it("Product Search in searchbar", () => {
    search.searchInput();
  });
  it("Product Search using Partial Keyword", () => {
    search.searchPartialKeyword();
  });
  it("Search Invalid product Name", () => {
    search.searchInvalidInput();
  });
  it("Search with only one character", () => {
    search.searchOneChar();
  });
  it("Search with numeric value", () => {
    search.searchNumericVal();
  });
  it("Search using mixed-case letters", () => {
    search.searchMixedCase();
  });
  it("Verify empty search query", () => {
    search.emptySearch();
  });
});
