// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173';

test('App muestra un texto random', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = page.getByTestId('random-fact')

  const textContent = await text.textContent();

  expect(textContent?.length).toBeGreaterThan(0);
});

test('App muestra una imagen random', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = page.getByTestId('random-image')

  const textContent = await text.getAttribute('src');

  expect(textContent?.length).toBeGreaterThan(0);
});