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

  // Header nav link
  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.locator('header nav a:has-text("Brew Guide")').first().click();
  await page.waitForURL(`${BASE}/brewing-guides`);
  log("Header nav link opens Brew Guide index", page.url() === `${BASE}/brewing-guides`);

  const cards = page.locator('main a[href^="/brewing-guides/"]');
  log("7 method cards render", (await cards.count()) === 7, `count=${await cards.count()}`);

  // Into a method detail page
  await page.goto(`${BASE}/brewing-guides/espresso`, { waitUntil: "load" });
  log("Espresso heading renders", (await page.locator("h1").first().textContent())?.includes("Espresso"));

  const specRows = page.locator("dl > div");
  log("5 spec rows render", (await specRows.count()) === 5, `count=${await specRows.count()}`);

  const stepHeadings = page.locator("h3.font-display");
  log("8 espresso steps render", (await stepHeadings.count()) >= 8, `count=${await stepHeadings.count()}`);

  // Related methods grid navigation
  await page.locator('a:has-text("Pour-over")').first().click();
  await page.waitForURL(`${BASE}/brewing-guides/pour-over`);
  log("Related method card navigates", page.url() === `${BASE}/brewing-guides/pour-over`);

  // Back to index
  await page.locator('a:has-text("All brewing guides")').first().click();
  await page.waitForURL(`${BASE}/brewing-guides`);
  log("Back-to-index link works", page.url() === `${BASE}/brewing-guides`);

  // Footer link
  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.locator('footer a:has-text("Brew Guide")').first().click();
  await page.waitForURL(`${BASE}/brewing-guides`);
  log("Footer link opens Brew Guide index", page.url() === `${BASE}/brewing-guides`);

  // Locales
  await page.goto(`${BASE}/vi/brewing-guides/french-press`, { waitUntil: "load" });
  log(
    "VI detail page renders localized chrome",
    (await page.locator("text=Bước 1").first().isVisible()) === true
  );

  await page.goto(`${BASE}/zh/brewing-guides`, { waitUntil: "load" });
  const zhCards = page.locator('main a[href^="/zh/brewing-guides/"]');
  log("ZH index renders 7 cards", (await zhCards.count()) === 7, `count=${await zhCards.count()}`);

  log("No console errors", consoleErrors.length === 0, consoleErrors.join(" | "));
  await page.close();
}

await browser.close();

if (errors.length > 0) {
  console.error(`\n${errors.length} step(s) failed:`, errors);
  process.exit(1);
} else {
  console.log("\nAll brewing guides smoke test steps passed.");
}
