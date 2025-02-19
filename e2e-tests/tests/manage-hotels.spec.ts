import { test, expect } from "@playwright/test";
import path from "path";


const UI_URL = "http://localhost:5173"

test.beforeEach(async ({ page }) => {
		await page.goto(UI_URL);
		await page.getByRole("link", { name: "Sign In" }).click();

		await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

		await page.locator("[name=email]").fill("test01@email.com")
		await page.locator("[name=password]").fill("123456");

		await page.getByRole("button", { name: "Login" }).click();

		await expect(page.getByText("Sign in successful")).toBeVisible();
});

test("Should allow user to add a hotel", async ({ page }) => {
	await page.goto(`${UI_URL}/add-hotel`);
	await page.locator("[name='name']").fill("Test hotel name");
	await page.locator("[name='city']").fill("Test hotel city");
	await page.locator("[name='country']").fill("Test hotel country");
	await page.locator("[name='description']").fill("Test hotel description");
	await page.locator("[name='pricePerNight']").fill("100");
	await page.selectOption("select[name='starRating']", "3");
	await page.getByText("Budget").click();
	await page.getByLabel("Free WiFi").check();
	await page.getByLabel("Parking").check();
	await page.locator("[name='adultCount']").fill("2");
	await page.locator("[name='childCount']").fill("4");
	await page.setInputFiles("[name='imageFiles']", [
		path.join(__dirname, "files", "1.png"),
		path.join(__dirname, "files", "2.png")
	]);
	await page.getByRole("button", { name: "Save" }).click();

	await expect(page.getByText("Hotel Saved.")).toBeVisible();

});

test("Should display hotels", async({ page }) => {
	await page.goto(`${UI_URL}/my-hotels`);
	
	await expect(page.getByText("test01")).toBeVisible();
	await expect(page.getByText("As they debated")).toBeVisible();
	await expect(page.getByText("testCity, testCountry")).toBeVisible();
	await expect(page.getByText("Boutique")).toBeVisible();
	await expect(page.getByText("$200 per night")).toBeVisible();
	await expect(page.getByText("3 adults, 4 children")).toBeVisible();
	await expect(page.getByText("2 Star Rating")).toBeVisible();

	await expect(page.getByRole("link", { name: "View Details" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Add Hotel" })).toBeVisible();
});