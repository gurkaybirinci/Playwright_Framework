import { test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import userData from '../../data/userData.json'
import userDataList from '../../data/userDataList.json'


test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')
});

test('Login Test with Single Json Data', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().openSignInPage()
    await pm.onSignInPage().performLogin(userData.email, userData.password, 'Login')
    await pm.onSignInPage().waitForSeconds(3)
});

for (const user of userDataList) {
    test(`Login Test with List Json Data ${user.email}`, async ({ page }) => {
        const pm = new PageManager(page)
    
        await pm.navigateTo().openSignInPage()
        await pm.onSignInPage().performLogin(user.email, user.password, 'Login')
        await pm.onSignInPage().waitForSeconds(3)
    });
}