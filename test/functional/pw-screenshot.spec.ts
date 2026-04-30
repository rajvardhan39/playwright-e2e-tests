import {test,expect} from '@playwright/test'

test("Should login successfully",async({page})=>{
     await page.goto("http://localhost:3000/login");
     await expect(page).toHaveTitle("ECOMMERCEFRONTEND")

     await expect(page.locator("//h2")).toHaveText("Login");

     await page.getByPlaceholder("name@example.com").fill("newuser@gmail.com");
     await page.getByPlaceholder("Enter your password").fill("123456");
     await page.getByRole("button").click();

     await expect(page.locator("//h1")).toHaveText("Premium Collection");
})



test("Should prevent login1", async ({ page }) => { 
  await page.goto("http://localhost:3000/login");
  await expect(page).toHaveTitle("ECOMMERCEFRONTEND");
  await expect(page.locator("//h2")).toHaveText("Login");

  await page.getByPlaceholder("name@example.com").fill("newuser@gmail.com");
  await page.getByPlaceholder("Enter your password").fill("1234567");

  // Create a promise that resolves when the dialog appears
  const dialogPromise = page.waitForEvent('dialog');

  // Trigger the click
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for the dialog to be captured
  const dialog = await dialogPromise;
  
  // Verify and close it
  expect(dialog.message()).toBe('Invalid9 credentials');
  await dialog.accept();

  // Ensure we are still on the login page
  await expect(page.locator("//h2")).toHaveText("Login");
});



/* 

  page.locator returns the locator and its return type is object( so page.locator doesn't return the promise)

*/

// test("by using codegen",async({page})=>{
//      await page.goto("http://localhost:3000/login");
//     // await page.getByRole('textbox', { name: 'Email Address' }).click();
//      await page.getByRole('textbox', { name: 'Email Address' }).fill('newuser@gmail.com');
     
//     // await page.getByRole('textbox', { name: 'Password' }).click();
//      await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//      await page.getByRole('button', { name: 'Sign In' }).click();
//      await expect(page.getByRole('heading', { name: 'Premium Collection' })).toBeVisible();

//      await page.getByRole('combobox').first().selectOption('1');
//      await page.getByRole('combobox').nth(1).selectOption('1');
//      await page.getByRole('combobox').nth(2).selectOption('2');
//      await expect(page.getByRole('heading', { name: 'Mouse' })).toBeVisible();
//      await page.getByRole('link', { name: 'My Profile' }).click();
//      await page.getByRole('button', { name: 'Logout' }).click();



// })