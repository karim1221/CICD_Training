import { test, expect } from '@playwright/test';

test.describe('Table test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('practice-test-table');
    await page.waitForLoadState('domcontentloaded');
  });

  test('select java Advanced only', async ({ page }) => {
    await page.getByRole('radio', { name: 'Java' }).check();
    await page.locator('label').filter({ hasText: 'Beginner' }).click();
    await page.getByRole('checkbox', { name: 'Intermediate' }).uncheck();
    const advancedLocator = page.getByRole('checkbox', { name: 'Advanced' });
    await page.screenshot({
      path: 'test-results/advanced.png',
      fullPage: true,
    });
    await expect(advancedLocator).toBeChecked();
  });
});
