// Renders every route to static HTML after `vite build` and `vite build --ssr`, so crawlers,
// link previews and first paint get real content. The client bundle then hydrates it.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, pages, notFoundMeta, canonical } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = await readFile(join(dist, "index.html"), "utf8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function headFor(meta) {
  const url = canonical(meta.path);
  const lines = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    meta.status === 404 ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
  ];
  return lines.join("\n    ");
}

function page(meta) {
  const head = template.replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, headFor(meta));
  if (head === template) throw new Error("head markers missing from dist/index.html");
  return head.replace("<!--app-->", render(meta.path));
}

const outFile = (path) => (path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html"));

for (const meta of pages) {
  const file = outFile(meta.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(meta));
  console.log(`prerendered ${meta.path}`);
}

await writeFile(join(dist, "404.html"), page(notFoundMeta));
console.log("prerendered /404.html");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${canonical(p.path)}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

await rm(ssrDir, { recursive: true, force: true });
