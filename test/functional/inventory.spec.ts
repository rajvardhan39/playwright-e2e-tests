import { test, expect } from "@playwright/test";

test.describe("Check all prices are positive", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    await page.goto("http://localhost:3000/login");
    await expect(page).toHaveTitle("ECOMMERCEFRONTEND");

    await expect(page.locator("//h2")).toHaveText("Login");
    await page.getByPlaceholder("name@example.com").fill("newuser@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("123456");
    await page.getByRole("button").click();

    await expect(page.locator("//h1")).toHaveText("Premium Collection");
  });


  test("confirm prices are non zero values", async ({ page }) => {
  
    const cards = await page.$$('.image-wrapper');
    const cardCount = cards.length;
    console.log('Number of product cards:', cardCount);
    expect(cardCount).toBeGreaterThan(0);

   
    for (const card of cards) {
      const priceText = await card.$eval('.price-tag', el => el.textContent || '');
     
      const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
      console.log('Product price:', price);
      expect(price, `Product price should be greater than 0, found: ${priceText}`).toBeGreaterThan(0);
    }
  });


});
