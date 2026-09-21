import {Page,Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
      
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto():Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  } 

  async login(username: string, password: string): Promise<void> {
     await this.safeFill(this.usernameInput, username);
     await this.safeFill(this.passwordInput, password);
     await  this.safeClick(this.loginButton);
  }
    }