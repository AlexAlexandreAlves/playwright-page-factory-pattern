import { Page, Locator } from "@playwright/test";


export class RegisterPage {

    readonly page: Page;
    readonly emailRegisterInput: Locator;
    readonly nameRegisterInput: Locator;
    readonly passwordRegisterInput: Locator;
    readonly passwordConfirmationRegisterInput: Locator;
    readonly accountWithOrWithoutBalanceToggle: Locator;
    readonly registerButton: Locator;
    readonly confirmationMessage: Locator;
    readonly confirmationIcon: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailRegisterInput = page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe seu e-mail');
        this.nameRegisterInput = page.getByRole('textbox', { name: 'Informe seu Nome' });
        this.passwordRegisterInput = page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe sua senha');
        this.passwordConfirmationRegisterInput = page.getByRole('textbox', { name: 'Informe a confirmação da senha' });
        this.accountWithOrWithoutBalanceToggle = page.locator('div').filter({ hasText: /^Criar conta com saldo \?$/ }).locator('span');
        this.registerButton = page.getByRole('button', { name: 'Cadastrar' });
        this.confirmationMessage = page.getByText(/A conta \d+-\d+ foi criada com/);;
        this.confirmationIcon = page.locator('div').filter({ hasText: /^A conta \d+-\d+ foi criada com sucessoFechar$/ }).getByRole('img');
        this.closeButton = page.getByText('Fechar');
    }

    async fillEmail(email: string) {
        await this.emailRegisterInput.fill(email);
    }

    async fillName(password: string) {
        await this.nameRegisterInput.fill(password);
    }

    async fillPassword(password: string) {
        await this.passwordRegisterInput.fill(password);
    }

    async fillPasswordConfirmation(password: string) {
        await this.passwordConfirmationRegisterInput.fill(password);
    }

    async clickBalanceToggle() {
        await this.accountWithOrWithoutBalanceToggle.click();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

}