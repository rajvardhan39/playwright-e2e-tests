import { test, expect } from "@playwright/test";

test.describe("Login Feature", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    await page.goto("http://localhost:3000/login");
    await expect(page).toHaveTitle("ECOMMERCEFRONTEND");

    await expect(page.locator("//h2")).toHaveText("Login");
  });

  test("Should login successfully", async ({ page }) => {
    await page.getByPlaceholder("name@example.com").fill("newuser@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("123456");
    await page.getByRole("button").click();

    await expect(page.locator("//h1")).toHaveText("Premium Collection");
  });

  test("Should prevent login ", async ({ page }) => {
    await page.getByPlaceholder("name@example.com").fill("newuser@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("1234567");
    await page.getByRole("button").click();

    // await expect(page.locator("//h1")).toHaveText("Premium Collection");

    await page.getByText("Don't have an account?").click();
  });
});
