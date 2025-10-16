import { test, expect } from '@playwright/test';

test("navigates to home, opens first venue, sees 'Venue details' heading", async ({
  page,
}) => {
  await page.goto('/');
  if (!(await page.locator('body').textContent()).trim()) {
    await page.goto('/index.html');
  }

  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

  const firstVenue = page
    .locator(
      "a[href*='venue'], a[href*='venues'], [data-testid='venue-item'] a, li a"
    )
    .first();

  await expect(firstVenue).toBeVisible({ timeout: 20000 });
  await firstVenue.click();

  await expect(
    page.getByRole('heading', { name: /venue details/i })
  ).toBeVisible({ timeout: 15000 });
});
