import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class HeaderComponent extends BasePage {
    private readonly cartIcon: Locator;
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async clickCartIcon(): Promise<void> {
        await this.safeClick(this.cartIcon);
    }

    async getCartCount(): Promise<string> {
        return await this.safeGetText(this.cartBadge);
    }
}