import MainPage from './MainPage.js';
import NewPastePage from './NewPastePage.js';

describe('PrivateBin Automation', () => {
  it('should create a new paste', async () => {
    await MainPage.open('https://privatebin.net');
    await NewPastePage.enterDetails({
      text: 'Hello from WebDriver'
    });

    await NewPastePage.submitPaste();
  });
});
