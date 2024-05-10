import { Locator, Page, expect } from "@playwright/test";

export class NavigationPage{
    private readonly page: Page
    private readonly signInMenuItem: Locator
    private readonly contactMenuItem: Locator
    private readonly categoriesMenuItem: Locator
    private readonly handToolsMenuItem: Locator
    private readonly profileName: Locator

    constructor(page: Page) {
        this.page = page
        this.signInMenuItem = page.getByRole('link', {name: 'Sign in'})
        this.contactMenuItem = page.getByRole('link', {name: 'Contact'})
        this.categoriesMenuItem = page.getByRole('button', {name: 'Categories'})
        this.handToolsMenuItem = page.getByRole('link', { name: 'Hand Tools' })
        this.profileName = page.getByTestId('nav-menu')
    }

    async openSignInPage() {
        await this.signInMenuItem.click()
    }

    async openContactPage() {
        await this.contactMenuItem.click()
    }

    async openHandToolsPage() {
        await this.categoriesMenuItem.click()
        await this.handToolsMenuItem.click()
    }

    async openCategoriesPage(text: string) {
        await this.categoriesMenuItem.click()
        await this.page.getByRole('link', {name: text}).click()
    }

    async verifyWithProfileName(firstName: string, lastName: string) {
        await expect(this.profileName).toHaveText(firstName + " " + lastName)
    }




}