import { expect, test } from "@playwright/test";

test("website starter renders a usable homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByRole("heading", { name: /build polished websites/i })).toBeVisible();
});
