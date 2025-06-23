import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { selectors } from '../inventory/selectors';
import { takeScreenshotWithHighlight } from '../support/utils';

let name = '';
let desc = '';
let price = '';


Given('A web browser into at the saucelabs menu', async function () {
  await expect(this.page).toHaveURL(/.*inventory\.html/);
  await this.page.waitForTimeout(1000);
});

When('click in the one product in the menu', async function () {
  const productLocator = this.page.locator(selectors.menu.itemProduct);
  name = await productLocator.locator(selectors.menu.itemProductname).innerText();
  desc = await productLocator.locator(selectors.menu.itemProductdesc).innerText();
  price = await productLocator.locator(selectors.menu.itemProductprice).innerText();

  await takeScreenshotWithHighlight(this.page, productLocator, 'validate_product_detalits', 'product');

  await productLocator.locator(selectors.menu.itemProductname).click();
  await this.page.waitForTimeout(1000);
}
);

Then('will redirect to the more detalis product', async function () {
  const urlActual = this.page.url();

  if (!urlActual.includes('/inventory-item.html?id=')) {
    throw new Error(`❌ La URL no contiene '/inventory-item.html?id='. Actual: ${urlActual}`);
  }
});


Then('wiht name product is equals name in the menu', async function () {
  const nameLocator = this.page.locator(selectors.product.labelName)
  await expect(nameLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, nameLocator, 'validate_product_name', 'product');
  await expect(nameLocator).toHaveText(name);
});

Then('wiht descipcion product is equals descipcion in the menu', async function () {
  const descLocator = this.page.locator(selectors.product.labelDesc)
  await expect(descLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, descLocator, 'validate_product_desc', 'product');
  await expect(descLocator).toHaveText(desc);
});

Then('wiht price product s equals price in the menu', async function () {
  const priceLocator = this.page.locator(selectors.product.labelPrice)
  await expect(priceLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, priceLocator, 'validate_product_price', 'product');
  await expect(priceLocator).toHaveText(price);
});

Then('I have a button for add car', async function () {
  const buttonAddCarLocator = this.page.locator(selectors.product.addCarButton)
  await expect(buttonAddCarLocator).toBeVisible();
  await takeScreenshotWithHighlight(this.page, buttonAddCarLocator, 'validate_product_button_car', 'product');
});