import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';

export class PageFactory {
    constructor(private page: Page) { }

    getLoginPage() {
        return new LoginPage(this.page);
    }
    getRegisterPage() {
        return new RegisterPage(this.page);
    }
}