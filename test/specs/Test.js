import SearchResultsPage from './SearchResultsPage.js';
import CalculatorPage from './CalculatorPage.js';
import EstimateSummaryPage from './EstimateSummaryPage.js';
import MainPage from './MainPage.js';

describe('Google Cloud Pricing Calculator', () => {
  it('should calculate and verify the cost correctly', async () => {
    await MainPage.open();
    await MainPage.searchForCalculator('Google Cloud Pricing Calculator');
    await SearchResultsPage.goToCalculator();
    await CalculatorPage.initiateEstimate();
    await CalculatorPage.fillOutForm();
    await CalculatorPage.verifyEstimatedCost();
    await EstimateSummaryPage.openSummary();
    await EstimateSummaryPage.verifySummary();
  });
});
