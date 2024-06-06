class EstimateSummaryPage {
  static async openSummary() {
    await $('SHARE_BUTTON_SELECTOR').click();
    await $('OPEN_ESTIMATE_SUMMARY_SELECTOR').click();
  }

  async verifySummary() {}
}

export default EstimateSummaryPage;
