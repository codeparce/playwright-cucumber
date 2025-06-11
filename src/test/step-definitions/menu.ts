import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { selectors } from '../inventory/selectors';
import { takeScreenshotWithHighlight } from "../support/utils";


Then('the catalog should be visible', async function () {
  const productLocator = this.page.locator(selectors.menu.catalogList);
  await expect(productLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, productLocator, 'validate_catalog','menu');
  await this.page.waitForTimeout(1000);
});

Then('the menu button should be visible', async function () {
  const menuLocator = this.page.getByRole(selectors.menu.menuButton);
  await expect(menuLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, menuLocator, 'validate_menu_icon','menu');

  await this.page.waitForTimeout(1000);

});


Then('the car button should be visible', async function () {
  const carLocator = this.page.locator(selectors.menu.carButton);
  await expect(carLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, carLocator, 'validate_car_icon','menu');

  await this.page.waitForTimeout(1000);
});