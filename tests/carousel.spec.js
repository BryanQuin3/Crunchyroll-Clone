import { test, expect } from "@playwright/test";

const URL = "https://crunchyroll-clone-seven.vercel.app/";

test("show display the first slide", async ({ page }) => {
  await page.goto(URL);
  // Expect a img
  const image = await page.waitForSelector(".carousel-card.active");
  await expect(image).toBeTruthy();
});
