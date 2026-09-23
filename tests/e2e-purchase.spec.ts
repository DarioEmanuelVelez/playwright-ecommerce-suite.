import { test, expect } from '../fixtures/page.fixtures';

test.describe('Flujo E2E: Inicio de sesión y agregado de productos', () => {

  test('Debería iniciar sesión y agregar la mochila al carrito exitosamente', async ({ loginPage, inventoryPage }) => {


    // 2. Navegamos e iniciamos sesión
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');

    // 3. Verificamos que ingresamos a la página de productos
    const title = await inventoryPage.getTitle();
    expect(title).toBe('Products');

    // 4. Agregamos el producto y validamos el contador usando el HeaderComponent
    await inventoryPage.addBackpackToCart();
    const cartCount = await inventoryPage.header.getCartCount();
    expect(cartCount).toBe('1');
  });

});