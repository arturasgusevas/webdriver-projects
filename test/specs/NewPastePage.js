import {$, browser} from '@wdio/globals';

class NewPastePage {
  static async enterDetails({text}) {
    const newButton = await $('#newbutton');
    await newButton.click();

    const textBox = await $('textarea#message');
    await textBox.setValue(text);

    await browser.pause(1000);

    const dropdown = await $('a#expiration');
    await dropdown.click();
    await browser.pause(1000);

    const expirationOption = await $(`a[data-expiration="10min"]`);
    await expirationOption.click();
    await browser.pause(1000);
  }

  static async submitPaste() {
    const submitButton = await $('button#sendbutton');
    await submitButton.waitForDisplayed({timeout: 5000});
    await submitButton.waitForEnabled({timeout: 5000});
    await submitButton.click();
    await browser.pause(10000);
  }
}

export default NewPastePage;
