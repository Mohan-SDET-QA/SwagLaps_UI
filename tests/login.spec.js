const { test, expect } = require("@playwright/test");

test('login-correct-cred', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('//input[@type="submit"]').click();

    const afterLogin = page.url();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log("Successfully Logged in");

}
)

test('Home Page- Title', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const pageTitle = page.title();
    console.log('page title is:' + pageTitle);
    await expect(page).toHaveTitle('Swag Labs');


    const pageURL = page.url();
    console.log('page URL is:' + pageURL);
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.close();


}
)

test('login-incorrect-cred', async ({ page }) => {

    
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('nothing');
    await page.locator('//input[@type="submit"]').click();

    const error = 'Epic sadface: Username and password do not match any user in this service';
    await expect(page).toContain(error);
    
    await page.close();

     


}
)