import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { selectors } from '../inventory/selectors';
import { takeScreenshot } from '../support/utils';


// abrir el navegador en la página de login
Given('A web browser is at the saucelabs login page', async function () {
  await this.page.goto(process.env.BASE_URL ?? '');
});

// ingresar credenciales y hacer clic en el botón de login
When(
  'A user enters the username and the password, and clicks on the login button',
  async function () {
    const username = process.env.USERLABS ?? '';
    const password = process.env.PASSLABS ?? '';

    await this.page.fill(selectors.login.usernameInput, username);
    await this.page.waitForTimeout(1000);

    await this.page.fill(selectors.login.passwordInput, password);
    await this.page.waitForTimeout(1000);

    await takeScreenshot(this.page, 'into_login_pages','login');
    await this.page.click(selectors.login.loginButton);
  }
);

// verificar que la URL contiene "inventory"
Then('the url will contains the inventory subdirectory', async function () {
  await expect(this.page).toHaveURL(/.*inventory\.html/);
});
