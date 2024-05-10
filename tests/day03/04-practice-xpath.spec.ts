import { test, expect } from '@playwright/test';

test('Practice - Xpath', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('//input[@type="submit"]').click()

    await expect(page.locator('//span[@class="title"]')).toBeVisible()
    await page.locator('//img[@alt="Sauce Labs Backpack"]').click()
});
