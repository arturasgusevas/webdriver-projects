class SearchResultsPage {
  static async goToCalculator() {
    const calculatorLink = await $('a.gs-title');
    await calculatorLink.click();
  }
}

export default SearchResultsPage;
