import { chromium } from "playwright";

const BASE = "http://localhost:4100";
const errors = [];

function log(step, ok, detail = "") {
  console.log(`${ok ? "OK " : "FAIL"} ${step}${detail ? " — " + detail : ""}`);
  if (!ok) errors.push(step);
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, hasTouch: true });
  const consoleErrors = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
  page.on("pageerror", (e) => consoleErrors.push(String(e)));

  await page.goto(`${BASE}/shop/whole-bean-250g`, { waitUntil: "networkidle" });

  const gallery = page.locator('[role="group"][aria-label="Product photos"]');
  log("Gallery renders", await gallery.isVisible());

  const thumbs = page.locator('button[aria-label^="View image"]');
  log("3 thumbnails render", (await thumbs.count()) === 3, `count=${await thumbs.count()}`);

  // Click second thumbnail, check aria-current + live region updates
  await thumbs.nth(1).click();
  await page.waitForTimeout(350);
  const liveText1 = await gallery.locator('[aria-live="polite"]').textContent();
  log("Live region updates after thumbnail click", liveText1?.includes("Terraced Arabica"), `text=${liveText1}`);
  log("Second thumbnail marked aria-current", (await thumbs.nth(1).getAttribute("aria-current")) === "true");

  // Keyboard navigation
  await gallery.focus();
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(350);
  const liveText2 = await gallery.locator('[aria-live="polite"]').textContent();
  log("ArrowRight advances image", liveText2?.includes("Highland coffee ridges"), `text=${liveText2}`);

  await page.keyboard.press("ArrowLeft");
  await page.keyboard.press("ArrowLeft");
  await page.waitForTimeout(350);
  const liveText3 = await gallery.locator('[aria-live="polite"]').textContent();
  log("ArrowLeft wraps back to primary image", liveText3?.includes("whole bean coffee"), `text=${liveText3}`);

  // Prev/next buttons
  await page.locator('button[aria-label="Next image"]').click();
  await page.waitForTimeout(350);
  const liveText4 = await gallery.locator('[aria-live="polite"]').textContent();
  log("Next button advances", liveText4?.includes("Terraced Arabica"), `text=${liveText4}`);

  // Swipe simulation via touch events dispatched on the gallery element
  const box = await gallery.boundingBox();
  if (box) {
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      const rect = el.getBoundingClientRect();
      const startX = rect.x + rect.width * 0.8;
      const endX = rect.x + rect.width * 0.2;
      const y = rect.y + rect.height / 2;
      el.dispatchEvent(new TouchEvent("touchstart", { touches: [new Touch({ identifier: 1, target: el, clientX: startX, clientY: y })], bubbles: true }));
      el.dispatchEvent(new TouchEvent("touchend", { changedTouches: [new Touch({ identifier: 1, target: el, clientX: endX, clientY: y })], bubbles: true }));
    }, '[role="group"][aria-label="Product photos"]');
  }
  await page.waitForTimeout(350);
  const liveText5 = await gallery.locator('[aria-live="polite"]').textContent();
  log("Swipe left advances to next image", liveText5?.includes("Highland coffee ridges"), `text=${liveText5}`);

  log("No console errors", consoleErrors.length === 0, consoleErrors.join(" | "));
  await page.close();
}

await browser.close();

if (errors.length > 0) {
  console.error(`\n${errors.length} step(s) failed:`, errors);
  process.exit(1);
} else {
  console.log("\nAll gallery smoke test steps passed.");
}
