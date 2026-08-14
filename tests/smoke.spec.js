import { expect, test } from "@playwright/test";

test("home page loads and nav works", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#header-name")).toContainText("Hayden Mak");

  await page.getByRole("link", { name: "Resume" }).first().click();
  await expect(page).toHaveURL(/resume\.html$/);
  await expect(page.locator("#content-header-img-description")).toContainText("Resume");

  await page.getByRole("link", { name: "Projects" }).first().click();
  await expect(page).toHaveURL(/projects\.html$/);
  await expect(page.locator("#content-header-img-description")).toContainText("Projects");

  await page.getByRole("link", { name: "Contact" }).first().click();
  await expect(page).toHaveURL(/contact\.html$/);
  await expect(page.locator("#content-header-img-description")).toContainText("Contact");
});
