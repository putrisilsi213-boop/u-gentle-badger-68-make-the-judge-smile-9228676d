// Make the Judge Smile — make.fun bounty entry
// A program that writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Pure Node 22 standard library: no network, no model calls, no dependencies.
// Deterministic: running it twice writes byte-identical output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "This morning the bus driver held the doors for an old man crossing with a loaf of bread under his arm — and the whole bus, strangers and all, waited like it was the most important thing in the world.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
  console.log(`wrote entry.txt: ${LINE.length} characters`);
}

main();
