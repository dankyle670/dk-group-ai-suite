import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const PORT = 5050;

const routes = [
  '/',
  '/ai-solutions',
  '/web-development',
  '/mobile-development',
  '/data-solutions',
  '/design-solutions',
  '/pricing',
  '/dk-agents',
  '/about',
  '/contact',
];

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.woff2':'font/woff2',
};

function createStaticServer() {
  return http.createServer((req, res) => {
    const url = req.url.split('?')[0];
    let filePath = path.join(DIST, url);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function prerender() {
  const server = createStaticServer();
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`📡  Static server on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    const html = await page.content();
    const outDir = path.join(DIST, route === '/' ? '' : route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    console.log(`✅  prerendered ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('🎉  Prerendering done.');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
