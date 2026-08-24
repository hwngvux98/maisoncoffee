// One-off placeholder asset generator. Run with: node scripts/gen-assets.mjs
// Produces brand-colored procedural SVG->raster art standing in for real
// farm photography and product renders until the client supplies real shots.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, "..", "public", "assets");
mkdirSync(out, { recursive: true });

const colors = {
  green900: "#12301A",
  green800: "#173A20",
  green700: "#1E4A2A",
  green600: "#245B33",
  green500: "#2F8C3B",
  green400: "#4FA652",
  green200: "#BFE0BE",
  cream050: "#FBF8EC",
  cream100: "#F6F0DD",
  gold300: "#F4C978",
  gold500: "#EDA83D",
  gold600: "#D6922C",
  ink900: "#1B211A",
};

async function svgToJpg(svg, file, w, h) {
  await sharp(Buffer.from(svg)).resize(w, h).jpeg({ quality: 84 }).toFile(path.join(out, file));
}
async function svgToPng(svg, file, w, h) {
  await sharp(Buffer.from(svg)).resize(w, h).png().toFile(path.join(out, file));
}

// --- Hero / farm photograph 1: misty terraced highland farm ---
function farmHillside() {
  const rows = [];
  for (let i = 0; i < 9; i++) {
    const y = 420 + i * 90;
    const shade = i % 2 === 0 ? colors.green600 : colors.green700;
    rows.push(
      `<path d="M-100,${y} Q 640,${y - 70 - i * 6} 1380,${y} L 1380,${y + 60} Q 640,${y - 10 - i * 6} -100,${y + 60} Z" fill="${shade}" opacity="${0.92 - i * 0.04}"/>`
    );
  }
  const trees = [];
  for (let i = 0; i < 60; i++) {
    const x = (i * 137) % 1280;
    const rowIdx = Math.floor(i / 7);
    const y = 440 + rowIdx * 90 + ((i * 53) % 40);
    trees.push(`<circle cx="${x}" cy="${y}" r="${5 + (i % 3)}" fill="${colors.green400}" opacity="0.55"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="960" viewBox="0 0 1280 960">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${colors.gold300}"/>
        <stop offset="35%" stop-color="${colors.green200}"/>
        <stop offset="100%" stop-color="${colors.green600}"/>
      </linearGradient>
      <radialGradient id="sun" cx="50%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${colors.gold300}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${colors.gold300}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${colors.cream050}" stop-opacity="0"/>
        <stop offset="100%" stop-color="${colors.cream050}" stop-opacity="0.35"/>
      </linearGradient>
    </defs>
    <rect width="1280" height="960" fill="url(#sky)"/>
    <rect width="1280" height="960" fill="url(#sun)"/>
    ${rows.join("\n")}
    ${trees.join("\n")}
    <rect y="620" width="1280" height="200" fill="url(#mist)"/>
    <rect width="1280" height="960" fill="${colors.green900}" opacity="0.06"/>
  </svg>`;
}

// --- Hero / farm photograph 2: close highland ridge at golden hour ---
function farmHarvest() {
  const ridges = [];
  for (let i = 0; i < 6; i++) {
    const y = 300 + i * 110;
    ridges.push(
      `<path d="M-100,${y} Q 300,${y - 90} 640,${y - 20} T 1380,${y - 40} L 1380,960 L -100,960 Z" fill="${i % 2 === 0 ? colors.green700 : colors.green800}" opacity="${0.95 - i * 0.05}"/>`
    );
  }
  const dots = [];
  for (let i = 0; i < 140; i++) {
    const x = (i * 91) % 1280;
    const y = 500 + ((i * 173) % 420);
    dots.push(`<circle cx="${x}" cy="${y}" r="${3 + (i % 4)}" fill="${colors.gold500}" opacity="0.35"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="960" viewBox="0 0 1280 960">
    <defs>
      <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${colors.gold500}"/>
        <stop offset="45%" stop-color="${colors.gold300}"/>
        <stop offset="100%" stop-color="${colors.green600}"/>
      </linearGradient>
    </defs>
    <rect width="1280" height="960" fill="url(#sky2)"/>
    ${ridges.join("\n")}
    ${dots.join("\n")}
    <rect width="1280" height="960" fill="${colors.green900}" opacity="0.08"/>
  </svg>`;
}

// --- Whole bean bag product render (flat vector, transparent bg) ---
function beanBag() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
    <defs>
      <linearGradient id="bag" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${colors.green700}"/>
        <stop offset="100%" stop-color="${colors.green900}"/>
      </linearGradient>
    </defs>
    <g>
      <path d="M300,180 L700,180 L740,220 L740,860 Q740,900 700,900 L300,900 Q260,900 260,860 L260,220 Z" fill="url(#bag)"/>
      <path d="M300,180 L330,120 L670,120 L700,180 Z" fill="${colors.green800}"/>
      <rect x="330" y="120" width="340" height="34" rx="17" fill="${colors.green900}"/>
      <rect x="280" y="360" width="440" height="230" rx="18" fill="${colors.cream050}"/>
      <text x="500" y="450" text-anchor="middle" font-family="Georgia, serif" font-size="46" fill="${colors.green700}">maison</text>
      <text x="500" y="500" text-anchor="middle" font-family="Georgia, serif" font-size="46" fill="${colors.green700}">coffee</text>
      <text x="500" y="555" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="4" font-size="20" fill="${colors.gold600}">WHOLE BEAN</text>
      <rect x="440" y="850" width="120" height="60" rx="8" fill="${colors.gold500}"/>
    </g>
  </svg>`;
}

// --- Drip bag box product render ---
function dripBox() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
    <defs>
      <linearGradient id="box" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${colors.cream100}"/>
        <stop offset="100%" stop-color="${colors.cream050}"/>
      </linearGradient>
    </defs>
    <g>
      <path d="M260,260 L740,260 L780,300 L780,780 L220,780 L220,300 Z" fill="url(#box)" stroke="${colors.green700}" stroke-width="4"/>
      <path d="M260,260 L300,200 L700,200 L740,260 Z" fill="${colors.green600}"/>
      <rect x="260" y="420" width="480" height="220" rx="14" fill="${colors.green900}"/>
      <text x="500" y="500" text-anchor="middle" font-family="Georgia, serif" font-size="42" fill="${colors.gold300}">maison</text>
      <text x="500" y="548" text-anchor="middle" font-family="Georgia, serif" font-size="42" fill="${colors.gold300}">coffee</text>
      <text x="500" y="600" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="4" font-size="18" fill="${colors.cream050}">DRIP COFFEE</text>
      <circle cx="500" cy="720" r="10" fill="${colors.gold500}"/>
    </g>
  </svg>`;
}

await svgToJpg(farmHillside(), "farm-hillside.jpg", 1920, 1440);
await svgToJpg(farmHarvest(), "farm-harvest.jpg", 1920, 1440);
await svgToPng(beanBag(), "whole-bean-bag.png", 1000, 1000);
await svgToPng(dripBox(), "drip-bag-box.png", 1000, 1000);

console.log("Generated placeholder assets in", out);
