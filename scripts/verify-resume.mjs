import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const resumeFileName = 'bill_gao_CV_2026.pdf';
const publicResumePath = resolve('public', 'resume', resumeFileName);
const distResumePath = resolve('dist', 'resume', resumeFileName);
const distAssetsDir = resolve('dist', 'assets');

function fail(message) {
  console.error(`Resume verification failed: ${message}`);
  process.exit(1);
}

if (!existsSync(publicResumePath)) {
  fail(`Missing source file at ${publicResumePath}`);
}

if (!existsSync(distResumePath)) {
  fail(`Missing built file at ${distResumePath}. Run "npm run build" first.`);
}

if (!existsSync(distAssetsDir)) {
  fail(`Missing assets directory at ${distAssetsDir}`);
}

const assetFiles = readdirSync(distAssetsDir).filter((name) => name.endsWith('.js'));
if (assetFiles.length === 0) {
  fail('No built JavaScript assets found in dist/assets');
}

const referenceToken = `resume/${resumeFileName}`;
const hasReference = assetFiles.some((fileName) => {
  const jsPath = resolve(distAssetsDir, fileName);
  const content = readFileSync(jsPath, 'utf8');
  return content.includes(referenceToken);
});

if (!hasReference) {
  fail(`Built assets do not reference ${referenceToken}`);
}

console.log('Resume verification passed. Build contains a valid downloadable resume link.');
