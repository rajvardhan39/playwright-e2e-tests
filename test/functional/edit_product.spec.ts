import { test, expect } from '@playwright/test';

test("Edit Product", async ({ page }) => {
    // 1. Navigate and Login
    await page.goto('http://localhost:3000/products');
    await page.getByRole('link', { name: 'Login' }).click();
    
    await page.getByRole('textbox', { name: 'Email Address' }).fill('admin@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Sign In' }).click();

     await page.getByRole('link', { name: 'Users' }).click();
     await page.getByRole('link', { name: 'Products' }).click();
     await page.getByRole('link', { name: 'Categories' }).click();
     await page.getByRole('link', { name: 'Orders' }).click();
     await page.locator('tr:nth-child(8) > td:nth-child(7) > .status-wrapper > .status-select').selectOption('SHIPPED');
     await page.getByRole('link', { name: 'Dashboard' }).click();
     await page.getByRole('link', { name: 'Users' }).click();
     await page.getByRole('button', { name: 'Logout' }).click();

});