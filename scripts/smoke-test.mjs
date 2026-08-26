import { chromium } from "playwright";

const BASE = "http://localhost:4100";
const errors = [];

function log(step, ok, detail = "") {
  console.log(`${ok ? "OK " : "FAIL"} ${step}${detail ? " — " + detail : ""}`);
  if (!ok) errors.push(step);
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

// Desktop flow
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto(`${BASE}/`, { waitUntil: "load" });
  log("Home loads", (await page.title()).includes("Maison Coffee"));
  log("H1 present", (await page.locator("h1").first().textContent())?.includes("clouds"));

  // Add to cart from featured section
  await page.locator('button[aria-label="Add to cart"]').first().click();
  await page.waitForTimeout(300);
  const badge = await page.locator("header button[aria-label='Open cart'] span").first().textContent();
  log("Cart badge shows 1 after add-to-cart", badge?.trim() === "1", `badge=${badge}`);

  const cartOverlay = page.locator('div[aria-hidden]:has([aria-label="Your cart"])');
  const drawerOpen = (await cartOverlay.getAttribute("aria-hidden")) === "false";
  log("Cart drawer opens after add-to-cart", drawerOpen);

  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  const drawerClosedAfterEsc = (await cartOverlay.getAttribute("aria-hidden")) === "true";
  log("Escape closes cart drawer", drawerClosedAfterEsc);

  // Product detail page
  await page.goto(`${BASE}/shop/whole-bean-250g`, { waitUntil: "load" });
  log("Product page loads", (await page.locator("h1").first().textContent())?.includes("Maison Specialty"));
  const productStepper = page.locator('main [role="group"][aria-label="Quantity"]');
  await productStepper.locator('button[aria-label="Increase quantity"]').click();
  const qty = await productStepper.locator("span").textContent();
  log("Quantity stepper increments", qty?.trim() === "2", `qty=${qty}`);

  // Cart page
  await page.goto(`${BASE}/cart`, { waitUntil: "load" });
  const cartH1 = await page.locator("h1").first().textContent();
  log("Cart page renders", !!cartH1);

  // Vietnamese route
  await page.goto(`${BASE}/vi`, { waitUntil: "load" });
  const viH1 = await page.locator("h1").first().textContent();
  log("VI home renders Vietnamese h1", viH1?.includes("mây"), `h1=${viH1}`);

  // Wholesale form validation (submit without network — check required attrs, not full send)
  await page.goto(`${BASE}/#wholesale`, { waitUntil: "load" });
  const emailRequired = await page.locator("#workEmail").getAttribute("required");
  log("Wholesale email input is required", emailRequired !== null);

  log("No console errors (desktop flow)", consoleErrors.length === 0, consoleErrors.join(" | "));
  await page.close();
}

// Mobile menu flow
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.locator('button[aria-label="Open menu"]').click();
  await page.waitForTimeout(300);
  const menuOverlay = page.locator('div[aria-hidden]:has([aria-label="Menu"])');
  const menuOpen = (await menuOverlay.getAttribute("aria-hidden")) === "false";
  log("Mobile menu opens", menuOpen);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  const menuClosed = (await menuOverlay.getAttribute("aria-hidden")) === "true";
  log("Escape closes mobile menu", menuClosed);
  await page.close();
}

await browser.close();

if (errors.length > 0) {
  console.error(`\n${errors.length} smoke test step(s) failed:`, errors);
  process.exit(1);
} else {
  console.log("\nAll smoke test steps passed.");
}
