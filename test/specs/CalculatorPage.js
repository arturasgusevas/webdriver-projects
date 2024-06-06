class CalculatorPage {
  static async initiateEstimate() {
    const addToEstimate = await $('button.UywwFc-LgbsSe');
    await addToEstimate.scrollIntoView();
    await addToEstimate.waitForClickable({timeout: 5000});
    await addToEstimate.click();
  }

  static async selectComputeEngine() {
    const computeEngine = await $('div.aHij0b-aGsRMb');
    await computeEngine.waitForDisplayed({timeout: 5000});
    await computeEngine.click();
  }

  static async fillOutForm() {
    await this.selectComputeEngine();
    const plusButton = await $('button[aria-label="Increment"]');
    await plusButton.scrollIntoView();
    await plusButton.waitForClickable({timeout: 5000});

    for (let i = 0; i < 3; i++) {
      await plusButton.click();
      await browser.pause(500);
    }

    const machineTypeDropdown = await $('div.t8xIwc[jsname="kgDJk"]');
    await machineTypeDropdown.scrollIntoView({block: 'center'});
    await machineTypeDropdown.waitForClickable({timeout: 5000});
    await machineTypeDropdown.click();

    const machineTypeOption = await $('li[data-value="n1-standard-8"]');
    await machineTypeOption.waitForDisplayed({timeout: 5000});
    await machineTypeOption.scrollIntoView({block: 'center'});
    await machineTypeOption.waitForClickable({timeout: 5000});
    await machineTypeOption.click();

    const gpuButton = await $('button[aria-label="Add GPUs"]');
    await gpuButton.scrollIntoView();
    await gpuButton.waitForClickable({timeout: 5000});
    await gpuButton.click();

    const gpuTypeDropdown = await $('');
    await gpuTypeDropdown.scrollIntoView({block: 'center'});
    await gpuTypeDropdown.waitForClickable({timeout: 10000});
    await gpuTypeDropdown.click();
    //CAN'T FIND gpuTypeDropdown SELECTOR
  }

  static async verifyEstimatedCost() {
    const costDisplay = await $('');
    await costDisplay.waitForDisplayed({timeout: 5000});
    const cost = await costDisplay.getText();
    console.log(cost);
  }
}

export default CalculatorPage;
