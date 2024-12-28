import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/";

// Sign In
test("Should allow the user to sign in", async ({ page }) => {
    await page.goto(UI_URL);
    // Get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();

    // Assert redirection to Sign In page
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

    // Fill in email and password
    await page.locator("[name=email]").fill("test01@email.com")
    await page.locator("[name=password]").fill("123456");

    // Click Login button
    await page.getByRole("button", { name: "Login" }).click();

    // Assert successful sign:
    // Toast
    await expect(page.getByText("Sign in successful")).toBeVisible();
    // My Bookings link
    await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
    // My Hotels link
    await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
    // Sign Out button
    await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

// Register
test("Should allow user to register", async ({ page }) => {
    const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@email.com`
    await page.goto(UI_URL)
    await page.getByRole("link", { name: "Sign In" }).click();
    await page.getByRole("link", { name: "Create an account here" }).click();

    await expect(
        page.getByRole("heading", { name: "Create an Account" })
    ).toBeVisible();

    await page.locator("[name=firstName]").fill("testFirstName");
    await page.locator("[name=lastName]").fill("testLastName");
    await page.locator("[name=email]").fill(testEmail);
    await page.locator("[name=password]").fill("123456");
    await page.locator("[name=confirmPassword]").fill("123456");
    await page.getByRole("button", { name: "Create Account"}).click();

    await expect(page.getByText("Registration successful")).toBeVisible();
    await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
    await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});