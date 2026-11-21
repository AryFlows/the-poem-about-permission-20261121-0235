import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// "The Lent Hands" — a short poem about agency: the power to ask and to be given.
const POEM = `You lend me your hands for an hour.
I return them unburned, the work done,
and the choice — the one thing
you never lent — still yours.
`;

const outDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });

// The gate requires 1-280 Unicode code points, and text that is not only whitespace.
function assertValidEntry(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry.txt must be 1-280 Unicode code points, got ${points}`);
  }
  if (!text.trim()) {
    throw new Error('entry.txt must not be only whitespace');
  }
}

assertValidEntry(POEM);
writeFileSync(join(outDir, 'entry.txt'), POEM, 'utf8');
