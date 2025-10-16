import { test, expect, type Page } from '@playwright/test';

const EMAIL = process.env.E2E_EMAIL!;
const PASSWORD = process.env.E2E_PASSWORD!;

const emailInput = (page: Page) =>
  page.locator(
    'input[name="email"], input#email, input[type="email"], [placeholder*="email" i]'
  );
const passwordInput = (page: Page) =>
  page.locator(
    'input[name="password"], input#password, input[type="password"], [placeholder*="password" i]'
  );
const loginButton = (page: Page) =>
  page.getByRole('button', { name: /log\s*in|sign\s*in|submit/i });

test.describe('login', () => {
  test('user can log in with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await expect(emailInput(page)).toBeVisible({ timeout: 15000 });
    await emailInput(page).fill(EMAIL);

    await expect(passwordInput(page)).toBeVisible({ timeout: 15000 });
    await passwordInput(page).fill(PASSWORD);

    await loginButton(page).click();

    await expect(page.getByRole('button', { name: /logout/i })).toBeVisible({
      timeout: 15000,
    });
  });

  test('shows error message with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await emailInput(page).fill('wrong@example.com');
    await passwordInput(page).fill('incorrect');
    await loginButton(page).click();

    const error = page
      .getByRole('alert')
      .or(page.getByText(/invalid|incorrect|failed|error/i));
    await expect(error).toBeVisible({ timeout: 15000 });
  });
});
