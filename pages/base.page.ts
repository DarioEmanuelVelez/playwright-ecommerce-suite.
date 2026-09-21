import { Page,Locator} from '@playwright/test'; 
export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
   async safeClick(locator: Locator): Promise<void> {
        await locator.click();
 }

  async safeFill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
      }


    async safeGetText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }
       }