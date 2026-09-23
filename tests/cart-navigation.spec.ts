import { test,expect } from "../fixtures/page.fixtures";

test.describe('Navegación del carrito', () => {
    test('Debería navegar al carrito desde la página de inventario', async ({ page,loginPage,inventoryPage, }) => {
    
        await loginPage.navigateTo();
        await loginPage.login('standard_user', 'secret_sauce');

        // Verificamos que ingresamos a la página de productos
        const title = await inventoryPage.getTitle();
        expect(title).toBe('Products');

        await inventoryPage.header.clickCartIcon();
        // Verificamos que estamos en la página del carrito
        await expect(page).toHaveURL(/.*cart.html/);

        });

         });

