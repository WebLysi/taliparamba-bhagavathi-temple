import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const source = path.join(__dirname, '../public/404.html');
const destination = path.join(__dirname, '../docs/404.html');

fs.copyFileSync(source, destination);
console.log('404.html copied to docs folder');