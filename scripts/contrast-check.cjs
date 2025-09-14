/**
 * ========================================================================
 * CONTRAST CHECKER - ACCESSIBILITY VALIDATION TOOL
 * ========================================================================
 *
 * This script analyzes the color contrast ratios of the SparkPlugz Media
 * design system to ensure WCAG accessibility compliance.
 *
 * Features:
 * - Parses CSS custom properties from index.css
 * - Converts HSL colors to RGB for luminance calculation
 * - Calculates contrast ratios using WCAG formulas
 * - Reports AA (4.5:1) and AAA (7:1) compliance levels
 * - Validates both dark and light theme token pairs
 *
 * Usage:
 *   node scripts/contrast-check.cjs
 *
 * Output:
 *   Contrast ratios for key color pairs in both themes
 *   AA/AAA compliance status for each combination
 *
 * WCAG Standards:
 * - AA: 4.5:1 minimum for normal text
 * - AAA: 7:1 enhanced contrast for better accessibility
 *
 * ========================================================================
 */

const fs = require("fs");

/**
 * Convert HSL color values to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {number[]} RGB values [r, g, b] (0-255)
 */
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const color =
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color);
  };
  return [f(0), f(8), f(4)];
}

/**
 * Calculate relative luminance of RGB color
 * Uses WCAG formula for luminance calculation
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {number} Relative luminance (0-1)
 */
function rgbToLuminance(r, g, b) {
  const srgb = [r, g, b]
    .map((v) => v / 255)
    .map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

/**
 * Calculate contrast ratio between two luminance values
 * Uses WCAG formula: (L1 + 0.05) / (L2 + 0.05)
 * @param {number} l1 - First luminance value
 * @param {number} l2 - Second luminance value
 * @returns {number} Contrast ratio (1-21)
 */
function contrastRatio(l1, l2) {
  const a = Math.max(l1, l2);
  const b = Math.min(l1, l2);
  return (a + 0.05) / (b + 0.05);
}

/**
 * Parse CSS custom properties from a CSS block
 * @param {string} block - CSS block content
 * @returns {Object} Object with variable names as keys and values
 */
function parseVariables(block) {
  const vars = {};
  const regex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = regex.exec(block)) !== null) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

// Read the main CSS file containing design tokens
const css = fs.readFileSync("./src/index.css", "utf8");

/**
 * Extract CSS block content for a given selector
 * @param {string} selector - CSS selector to find
 * @returns {string} Block content between braces
 */
function extractBlock(selector) {
  const re = new RegExp(
    selector.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") +
      "\\s*\\{([\\s\\S]*?)\\}",
    "m"
  );
  const m = css.match(re);
  return m ? m[1] : "";
}

const rootBlock = extractBlock(":root");
const lightBlock = extractBlock(".light");

const rootVars = parseVariables(rootBlock);
const lightVars = parseVariables(lightBlock);

function parseHsl(value) {
  // handles forms like "205 100% 45%" or "hsl(205 100% 45%)"
  const simple = /\s*(?:hsl\()?([0-9.]+)\s+([0-9.]+)%\s+([0-9.]+)%\s*\)?/i;
  const m = value.match(simple);
  if (!m) return null;
  return { h: parseFloat(m[1]), s: parseFloat(m[2]), l: parseFloat(m[3]) };
}

function checkPairs(vars, name) {
  console.log("\nTheme:", name);
  const pairs = [
    ["background", "foreground"],
    ["primary", "primary-foreground"],
    ["secondary", "secondary-foreground"],
    ["card", "card-foreground"],
  ];
  pairs.forEach(([a, b]) => {
    const va = vars[a];
    const vb = vars[b];
    if (!va || !vb) {
      console.log(`  - ${a}/${b}: missing variable`);
      return;
    }
    const ha = parseHsl(va);
    const hb = parseHsl(vb);
    if (!ha || !hb) {
      console.log(`  - ${a}/${b}: unable to parse HSL`);
      return;
    }
    const rgbA = hslToRgb(ha.h, ha.s, ha.l);
    const rgbB = hslToRgb(hb.h, hb.s, hb.l);
    const lumA = rgbToLuminance(...rgbA);
    const lumB = rgbToLuminance(...rgbB);
    const ratio = contrastRatio(lumA, lumB);
    const aa = ratio >= 4.5 ? "AA" : "fail";
    const aaa = ratio >= 7 ? "AAA" : "fail";
    console.log(
      `  - ${a} (${va}) vs ${b} (${vb}) -> contrast ${ratio.toFixed(
        2
      )} : ${aa}/${aaa}`
    );
  });
}

checkPairs(rootVars, "dark (default)");
checkPairs(lightVars, "light");
