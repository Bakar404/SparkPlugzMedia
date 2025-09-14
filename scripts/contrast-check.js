const fs = require("fs");

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

function rgbToLuminance(r, g, b) {
  const srgb = [r, g, b]
    .map((v) => v / 255)
    .map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrastRatio(l1, l2) {
  const a = Math.max(l1, l2);
  const b = Math.min(l1, l2);
  return (a + 0.05) / (b + 0.05);
}

function parseVariables(block) {
  const vars = {};
  const regex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = regex.exec(block)) !== null) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

const css = fs.readFileSync("./src/index.css", "utf8");

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
const darkBlock = extractBlock(".dark");

const rootVars = parseVariables(rootBlock);
const darkVars = parseVariables(darkBlock);

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

checkPairs(rootVars, "root (light)");
checkPairs(darkVars, "dark");
