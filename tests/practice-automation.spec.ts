import { test, expect } from '@playwright/test';

test.describe('Practice Automation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('practice-test-login');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should display the correct page title on the home page', async ({ page }) => {
    await test.info().attach('title_validation', {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
  });
  test('should login', async ({ page }) => {
    const expected = 'Logged In Successfully';
    const username = page.getByRole('textbox', { name: 'Username' });
    const password = page.getByRole('textbox', { name: 'Password' });
    await username.fill('student');
    await password.fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    const successMessage = page.getByRole('heading', { name: expected });
    await test.info().attach('login_validation', {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
    await expect(successMessage).toHaveText(expected);
  });
});
