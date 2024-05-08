import {$, browser} from '@wdio/globals';

class NewPastePage {
  static async enterDetails({code, syntax}) {
    const newButton = await $('#newbutton');
    await newButton.click();

    const textBox = await $('textarea#message');
    await textBox.setValue(code);

    await browser.pause(1000);

    const sintaxBtn = await $('a#formatter');
    await sintaxBtn.click();

    const sintaxOption = await $('a[data-format="syntaxhighlighting"]');
    await sintaxOption.click();
    browser.pause(1000);

    const expirationBtn = await $('a#expiration');
    await expirationBtn.click();

    const expirationOption = await $('a[data-expiration="10min"]');
    await expirationOption.click();
    browser.pause(1000);
  }

  static async submitPaste() {
    const submitButton = await $('button#sendbutton');
    await submitButton.waitForDisplayed({timeout: 5000});
    await submitButton.waitForEnabled({timeout: 5000});
    await submitButton.click();
    await browser.pause(10000);
  }

  static async verifyPaste(code) {
    const content = await $('textarea#message').getValue();
    expect(content).toEqual(code);
  }
}

export default NewPastePage;
