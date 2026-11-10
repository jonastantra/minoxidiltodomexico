// Auditoría del sitio generado (dist/) — Minoxidil Todo México.
// Uso: node scripts/audit.mjs  (después de npm run build)
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const CDMX_DIST = join(ROOT, "..", "minoxidilencdmx", "dist");
const DOMAIN = "https://www.minoxidiltodomexico.com";

function walk(dir, base = "") {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p, `${base}/${e}`));
    else if (e === "index.html") out.push(base === "" ? "/" : `${base}/`);
  }
  return out.sort();
}

const pages = walk(DIST);
const html = new Map(pages.map((p) => [p, readFileSync(join(DIST, p, "index.html"), "utf8")]));
const problems = [];
const notes = [];

const get = (re, s) => (s.match(re) || [])[1] || "";
const titles = new Map(), metas = new Map();
for (const [p, h] of html) {
  const t = get(/<title>([^<]*)<\/title>/, h), m = get(/<meta name="description" content="([^"]*)"/, h);
  if (!t) problems.push(`${p}: sin <title>`);
  if (!m) problems.push(`${p}: sin meta description`);
  if (titles.has(t)) problems.push(`${p}: título duplicado con ${titles.get(t)}`);
  if (metas.has(m)) problems.push(`${p}: meta description duplicada con ${metas.get(m)}`);
  titles.set(t, p); metas.set(m, p);
  const h1s = (h.match(/<h1[ >]/g) || []).length;
  if (h1s !== 1) problems.push(`${p}: ${h1s} etiquetas H1 (debe ser 1)`);
  const canon = get(/<link rel="canonical" href="([^"]*)"/, h);
  if (canon !== `${DOMAIN}${p}`) problems.push(`${p}: canonical incorrecto (${canon})`);
  if (!h.includes('lang="es-MX"')) problems.push(`${p}: falta lang es-MX`);
  if (h.length < 4000) problems.push(`${p}: página sospechosamente ligera (${h.length} bytes)`);
}

// enlaces internos y huérfanas
const pageSet = new Set(pages);
const inbound = new Map(pages.map((p) => [p, 0]));
let broken = 0;
for (const [p, h] of html) {
  for (const m of h.matchAll(/href="(\/[^"#]*)"/g)) {
    let target = m[1];
    if (target.startsWith("/assets/") || target.startsWith("/site-images/")) {
      if (!existsSync(join(DIST, target))) { problems.push(`${p}: recurso inexistente ${target}`); broken++; }
      continue;
    }
    if (!target.endsWith("/")) target += "/";
    if (!pageSet.has(target)) { problems.push(`${p}: enlace roto a ${m[1]}`); broken++; }
    else if (target !== p) inbound.set(target, inbound.get(target) + 1);
  }
}
for (const [p, n] of inbound) if (p !== "/" && n === 0) problems.push(`${p}: PÁGINA HUÉRFANA (nadie enlaza a ella)`);
notes.push(`Enlaces internos rotos: ${broken}`);

// claims y números viejos
const banned = ["resultados garantizados", "resultados permanentes", "garantizado", "+500", "100%", "5569380408", "55 6938 0408", "12PM", "5PM"];
for (const [p, h] of html) {
  const text = h.replace(/<script[\s\S]*?<\/script>/g, "");
  for (const b of banned) if (text.includes(b)) problems.push(`${p}: contiene texto prohibido/viejo: «${b}»`);
}

// sitemap
const sm = readFileSync(join(DIST, "sitemap.xml"), "utf8");
const smCount = (sm.match(/<loc>/g) || []).length;
if (smCount !== pages.length) problems.push(`sitemap: ${smCount} URLs vs ${pages.length} páginas`);
notes.push(`Sitemap: ${smCount} URLs`);

// similitud contra CDMX (5-gramas de palabras del <main>, Jaccard)
function grams(file) {
  const h = readFileSync(file, "utf8");
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0]
    .replace(/<[^>]+>/g, " ").toLowerCase().replace(/[^a-záéíóúñ0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 5 <= main.length; i++) set.add(main.slice(i, i + 5).join(" "));
  return set;
}
let maxSim = 0, maxPair = "";
if (existsSync(CDMX_DIST)) {
  const cdmxPages = walk(CDMX_DIST).map((p) => [p, grams(join(CDMX_DIST, p, "index.html"))]);
  for (const [p] of html) {
    const mine = grams(join(DIST, p, "index.html"));
    for (const [cp, cg] of cdmxPages) {
      let inter = 0; for (const g of mine) if (cg.has(g)) inter++;
      const j = inter / (mine.size + cg.size - inter || 1);
      if (j > maxSim) { maxSim = j; maxPair = `${p} vs CDMX ${cp}`; }
    }
  }
  notes.push(`Similitud máxima de texto (main, 5-gramas) contra CDMX: ${(maxSim * 100).toFixed(1)}% (${maxPair})`);
} else notes.push("Sin dist de CDMX para comparar similitud.");

console.log(`Páginas: ${pages.length} · Títulos únicos: ${titles.size} · Metas únicas: ${metas.size}`);
for (const n of notes) console.log("· " + n);
if (problems.length) { console.log(`\nPROBLEMAS (${problems.length}):`); for (const p of problems) console.log("  ✗ " + p); process.exit(1); }
console.log("\nAUDITORÍA LIMPIA: 0 problemas.");
