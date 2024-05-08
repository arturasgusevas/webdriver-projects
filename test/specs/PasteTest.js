import MainPage from './MainPage.js';
import NewPastePage from './NewPastePage.js';

describe('PrivateBin Automation', () => {
  it('should create a new paste with source code', async () => {
    await MainPage.open('https://privatebin.net');

    const code = `git config --global user.name "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;

    await NewPastePage.enterDetails({
      code: code,
      syntax: 'sintaxhighlighting'
    });

    await NewPastePage.submitPaste();
    await NewPastePage.verifyPaste(code);
  });
});
