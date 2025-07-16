import { expect, test } from '@playwright/test';
import { PageFactory } from '../ui/factory/page-factory';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Register and Authentication tests', () => {

    test('CT001 - Should be able to create and do the login through a new user with success', async ({ page }) => {

        // Start the factory
        const factory = new PageFactory(page);
        const loginPage = factory.getLoginPage();
        const registerPage = factory.getRegisterPage();

        // Do the registration
        await loginPage.clickRegisterButton();
        await registerPage.fillEmail("usuarioteste@gmail.com");
        await registerPage.fillName("Testezinho da Silva");
        await registerPage.fillPassword("12345");
        await registerPage.fillPasswordConfirmation("12345");
        await registerPage.clickRegisterButton();

        // Register confirmation assert
        await expect(registerPage.confirmationMessage).toBeVisible();
        await expect(registerPage.confirmationIcon).toBeVisible();
        await registerPage.closeButton.click();

        // Do login at the same flow because the application doesn't have database, so it saves only in memory
        await loginPage.fillEmail("usuarioteste@gmail.com");
        await loginPage.fillPassword("12345");
        await loginPage.clickLoginButton();
        await loginPage.page.waitForURL("https://bugbank.netlify.app/home");
        await expect(loginPage.page).toHaveURL("https://bugbank.netlify.app/home");
    });
});