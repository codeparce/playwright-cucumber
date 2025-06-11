import { Locator, Page } from 'playwright';
import fs from 'fs';
import path from 'path';

export async function takeScreenshot(page: Page, name: string, scenario: string) {
  const dir = path.resolve('output/screenshots/' + scenario);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const fileName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png';
  const filePath = path.join(dir, fileName);

  await page.screenshot({ path: filePath });
  console.log(`📸 Screenshot saved: ${filePath}`);
}

export async function takeScreenshotWithHighlight(page: Page, locator: Locator, name: string, scenario: string) {
  const dir = path.resolve('output/screenshots/' + scenario);
  // Resaltar el elemento con borde rojo
  await locator.evaluate((el) => {
    (el as HTMLElement).style.boxShadow = '0 0 0 3px red';
    (el as HTMLElement).style.transition = 'all 0.2s';
  });

  // Esperar un poco para que el estilo se vea
  await page.waitForTimeout(500);

  const fileName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png';
  const filePath = path.join(dir, fileName);

  // Tomar la captura de pantalla
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`📸 Screenshot saved: ${filePath}`);
  // Quitar el resaltado después de capturar
  await locator.evaluate((el) => {
    (el as HTMLElement).style.boxShadow = '';
  });
}