import {browser} from '@wdio/globals';

class MainPage {
  static async open(url) {
    await browser.url(url);
  }
}

export default MainPage;
