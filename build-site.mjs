import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const client = join(root, 'dist', 'client');
const server = join(root, 'dist', 'server');
const files = ['index.html', 'signature.html', 'favicon.ico', 'googlee721d62aa93c4a73.html', 'robots.txt', 'sitemap.xml', 'style.css', 'script.js'];

await rm(join(root, 'dist'), { recursive: true, force: true });
await Promise.all([mkdir(client, { recursive: true }), mkdir(server, { recursive: true })]);
await Promise.all(files.map(file => cp(join(root, file), join(client, file))));
await cp(join(root, 'images'), join(client, 'images'), { recursive: true });
await cp(join(root, 'worker', 'index.js'), join(server, 'index.js'));

console.log('Static site prepared in dist/.');
