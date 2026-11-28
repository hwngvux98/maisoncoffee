import { chromium } from "playwright";

const BASE = "http://localhost:4100";
const errors = [];

function log(step, ok, detail = "") {
  console.log(`${ok ? "OK " : "FAIL"} ${step}${detail ? " — " + detail : ""}`);
  if (!ok) errors.push(step);
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto(`${BASE}/`, { waitUntil: "load" });

  const toggle = page.locator('button[aria-label="Chat with us"]');
  log("Widget toggle button renders", await toggle.isVisible());

  await toggle.click();
  await page.waitForTimeout(250);
  log("Zalo link visible after opening", await page.locator('a:has-text("Chat on Zalo")').isVisible());
  log(
    "Zalo link points to zalo.me",
    (await page.locator('a:has-text("Chat on Zalo")').getAttribute("href")) === "https://zalo.me/84354279988"
  );
  log(
    "WhatsApp link points to wa.me",
    (await page.locator('a:has-text("Chat on WhatsApp")').getAttribute("href")) === "https://wa.me/84354279988"
  );
  log(
    "Instagram link points to ig.me",
    (await page.locator('a:has-text("Message us on Instagram")').getAttribute("href")) ===
      "https://ig.me/m/maisoncoffeevn"
  );

  // WeChat opens a QR modal instead of navigating
  await page.locator('button:has-text("Add us on WeChat")').click();
  await page.waitForTimeout(300);
  const modalWrapper = page.locator('div[aria-hidden]:has([aria-label="Scan to add us on WeChat"])');
  const modal = page.locator('div[role="dialog"][aria-label="Scan to add us on WeChat"]');
  log("WeChat QR modal opens", (await modalWrapper.getAttribute("aria-hidden")) === "false");
  log("WeChat QR image renders", await modal.locator("img").isVisible());

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  log("Escape closes WeChat modal", (await modalWrapper.getAttribute("aria-hidden")) === "true");

  // Toggle closes on outside click
  await toggle.click();
  await page.waitForTimeout(250);
  await page.mouse.click(10, 10);
  await page.waitForTimeout(250);
  log(
    "Clicking outside closes the popover",
    !(await page.locator('a:has-text("Chat on Zalo")').isVisible())
  );

  log("No console errors", consoleErrors.length === 0, consoleErrors.join(" | "));
  await page.close();
}

// Visible on a localized route too
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${BASE}/vi/brewing-guides`, { waitUntil: "load" });
  const toggle = page.locator('button[aria-label="Nhắn tin cho chúng tôi"]');
  log("Widget renders with VI labels on another route", await toggle.isVisible());
  await page.close();
}

await browser.close();

if (errors.length > 0) {
  console.error(`\n${errors.length} step(s) failed:`, errors);
  process.exit(1);
} else {
  console.log("\nAll contact widget test steps passed.");
}
