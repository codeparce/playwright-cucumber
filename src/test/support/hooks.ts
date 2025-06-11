import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { firefox, Browser, Page } from "playwright";
import dotenv from 'dotenv';
dotenv.config();

let browser: Browser;
const headless = process.env.HEADLESS === 'true';

BeforeAll(async function () {
  browser = await firefox.launch({
    headless,
    args: ['--start-maximized']
  }
  );
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  this.page = await browser.newPage({
    viewport: null,
  });
});

After(async function () {
  await this.page.close();
});
