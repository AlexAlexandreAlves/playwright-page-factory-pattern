import { Page, Locator } from "@playwright/test";


export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('form').filter({ hasText: 'E-mailSenhaAcessarRegistrarConheça nossos requisitosA aplicação não conta com' }).getByPlaceholder('Informe seu e-mail');
        this.passwordInput = page.locator('form').filter({ hasText: 'E-mailSenhaAcessarRegistrarConheça nossos requisitosA aplicação não conta com' }).getByPlaceholder('Informe sua senha');
        this.loginButton = page.getByRole('button', { name: 'Acessar' });
        this.registerButton = page.getByRole('button', { name: 'Registrar' });
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

}