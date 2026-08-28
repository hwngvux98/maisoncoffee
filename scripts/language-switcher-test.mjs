import { chromium } from "playwright";

const BASE = "http://localhost:4100";
const errors = [];

function log(step, ok, detail = "") {
  console.log(`${ok ? "OK " : "FAIL"} ${step}${detail ? " — " + detail : ""}`);
  if (!ok) errors.push(step);
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // EN home -> VI home
  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.locator('header a:has-text("VI")').first().click();
  await page.waitForURL(`${BASE}/vi`);
  log("EN home -> VI home", page.url() === `${BASE}/vi`, `url=${page.url()}`);

  // VI home -> EN home
  await page.locator('header a:has-text("EN")').first().click();
  await page.waitForURL(`${BASE}/`);
  log("VI home -> EN home", page.url() === `${BASE}/`, `url=${page.url()}`);

  // EN product page -> VI product page (path preserved)
  await page.goto(`${BASE}/shop/whole-bean-250g`, { waitUntil: "load" });
  await page.locator('header a:has-text("VI")').first().click();
  await page.waitForURL(`${BASE}/vi/shop/whole-bean-250g`);
  log(
    "EN product page -> VI product page preserves path",
    page.url() === `${BASE}/vi/shop/whole-bean-250g`,
    `url=${page.url()}`
  );

  // VI product page -> EN product page (path preserved)
  await page.locator('header a:has-text("EN")').first().click();
  await page.waitForURL(`${BASE}/shop/whole-bean-250g`);
  log(
    "VI product page -> EN product page preserves path",
    page.url() === `${BASE}/shop/whole-bean-250g`,
    `url=${page.url()}`
  );

  // VI cart page -> EN cart page
  await page.goto(`${BASE}/vi/cart`, { waitUntil: "load" });
  await page.locator('header a:has-text("EN")').first().click();
  await page.waitForURL(`${BASE}/cart`);
  log("VI cart page -> EN cart page preserves path", page.url() === `${BASE}/cart`, `url=${page.url()}`);

  await page.close();
}

// Mobile menu language switcher
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.locator('button[aria-label="Open menu"]').click();
  await page.waitForTimeout(300);
  const mobileSwitcher = page.locator('[role="dialog"][aria-label="Menu"] a:has-text("VI")').first();
  log("Mobile menu shows language switcher", await mobileSwitcher.isVisible());
  await mobileSwitcher.click();
  await page.waitForURL(`${BASE}/vi`);
  log("Mobile switcher navigates EN -> VI", page.url() === `${BASE}/vi`, `url=${page.url()}`);
  await page.waitForTimeout(300);
  const menuOverlay = page.locator('div[aria-hidden]:has([aria-label="Menu"])');
  log("Mobile menu closes after language switch", (await menuOverlay.getAttribute("aria-hidden")) === "true");
  await page.close();
}

await browser.close();

if (errors.length > 0) {
  console.error(`\n${errors.length} step(s) failed:`, errors);
  process.exit(1);
} else {
  console.log("\nAll language switcher test steps passed.");
}
