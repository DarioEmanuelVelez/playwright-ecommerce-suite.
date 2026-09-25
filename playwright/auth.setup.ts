
import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const authFile = 'playwright/.auth/user.json';

setup('Autenticar usuario y guardar storageState', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navegar y loguear con credenciales válidas
  await loginPage.navigateTo();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Verificar que llegamos al inventario antes de guardar
  await expect(page).toHaveURL(/.*inventory.html/);

  // 3. Guardar el estado de autenticación (cookies + storage) en disco
  await page.context().storageState({ path: authFile });
});