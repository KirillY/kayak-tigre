const { test, expect } = require('@playwright/test');

const languages = ['en', 'es', 'ru'];
const baseUrl = 'http://localhost:1313'; // Hugo's default development server port

test.describe('Site accessibility tests', () => {
  for (const lang of languages) {
    const langPrefix = `/${lang}`;

    test(`Homepage should be accessible in ${lang}`, async ({ page }) => {
      const response = await page.goto(`${baseUrl}${langPrefix}`);
      expect(response.status()).toBe(200);
      
      // Verify basic content
      await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test(`Blog root should be accessible in ${lang}`, async ({ page }) => {
      const response = await page.goto(`${baseUrl}${langPrefix}/blog`);
      expect(response.status()).toBe(200);
      // Verify basic content
      await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test(`About root should be accessible in ${lang}`, async ({ page }) => {
      const response = await page.goto(`${baseUrl}${langPrefix}/about`);
      expect(response.status()).toBe(200);
      // Verify basic content
      await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test(`Services root should be accessible in ${lang}`, async ({ page }) => {
      const response = await page.goto(`${baseUrl}${langPrefix}/services`);
      expect(response.status()).toBe(200);
      // Verify basic content
      await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test(`First blog post should be accessible in ${lang}`, async ({ page }) => {
      // First load the blog listing page
      const blogResponse = await page.goto(`${baseUrl}${langPrefix}/blog`);
      expect(blogResponse.status()).toBe(200);
      
      // Verify basic content on blog listing page
      await expect(page.locator('nav.navbar')).toBeVisible();
      
      // Click the first blog post link
      await page.locator('.row-cols-1.row-cols-sm-2 .card .card-body a.card-body-link').first().click();
      
      // Wait for navigation and verify basic content on post page
      await page.waitForLoadState('networkidle');
      await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test(`First service should be accessible in ${lang}`, async ({ page }) => {
      const servicesResponse = await page.goto(`${baseUrl}${langPrefix}/services`);
      expect(servicesResponse.status()).toBe(200);
      
      // Verify services page has service items
      // Verify page title is visible
      await expect(page.locator('h1')).toBeVisible();
      
      // Get the first service card link
      const firstServiceLink = await page.locator('.card .btn.btn-outline-primary').first();
      await expect(firstServiceLink).toBeVisible();
      
      // Click the first service link
      await firstServiceLink.click();
      
      // Wait for navigation to complete
      await page.waitForLoadState('networkidle');
      
      // Verify service page content
      await expect(page.locator('h1')).toBeVisible();
    });
  }
});

