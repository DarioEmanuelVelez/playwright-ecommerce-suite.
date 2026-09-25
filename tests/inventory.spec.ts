import { test, expect } from '@playwright/test';

test('Debe ingresar directamente al inventario usando la sesión guardada', async ({ page }) => {
  // Navegamos directo al inventario sin pasar por el login
  await page.goto('/inventory.html');

  // Verificamos que estamos en la URL correcta
  await expect(page).toHaveURL(/.*inventory.html/);

  // Verificamos que el título de la página de productos esté visible
  const title = page.locator('.title');
  await expect(title).toHaveText('Products');
});