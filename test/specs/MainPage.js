import {browser} from '@wdio/globals';

class MainPage {
  static async open() {
    await browser.url('https://cloud.google.com');
  }

  static async searchForCalculator(searchQuery) {
    const searchIcon = await $('div.YSM5S');
    await searchIcon.click();
    const searchInput = await $('input.mb2a7b');
    await searchInput.setValue(searchQuery);
    await browser.keys('Enter');
  }
}

export default MainPage;
