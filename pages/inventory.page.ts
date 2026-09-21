import  { Page,Locator } from '@playwright/test';
import { BasePage } from './base.page'; 
import { HeaderComponent } from './components/header.component';

export class InventoryPage extends BasePage {
    public readonly header: HeaderComponent;   
    private readonly titleSpan: Locator;
    private readonly inventoryItems: Locator;

    constructor(page: Page) {
        super(page);
        this.header = new HeaderComponent(page);
        this.titleSpan = page.locator('.title');
        this.inventoryItems = page.locator('.inventory_item');
    }

    async getTitle(): Promise<string> {
        return await this.safeGetText(this.titleSpan);
    }
}