import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { selectors } from '../inventory/selectors';
import { takeScreenshot, takeScreenshotWithHighlight } from '../support/utils';


When(
  'A user clicks on the menu button and clcik in to the option Logout',
  async function () {

    await this.page.getByRole(selectors.menu.menuButton).click();
    await this.page.waitForTimeout(1000);

    const itemLogoutMenu = this.page.locator(selectors.menu.itemLogoutMenu);
    await takeScreenshotWithHighlight(this.page, itemLogoutMenu, 'into_menu_options','logout');

    await expect(itemLogoutMenu).toBeVisible();
    await this.page.click(selectors.menu.itemLogoutMenu);
    await this.page.waitForTimeout(1000);
  }
);


Then('will redirect to the home page', async function () {
  await expect(this.page).toHaveURL(process.env.BASE_URL ?? '');
      await takeScreenshot(this.page, 'in_login_pages','logout');
});
