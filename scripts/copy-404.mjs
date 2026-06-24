import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const indexFile = resolve(distDir, 'index.html');
const notFoundFile = resolve(distDir, '404.html');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

if (existsSync(indexFile)) {
  copyFileSync(indexFile, notFoundFile);
}