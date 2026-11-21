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
writeFileSync(join(outDir, 'entry.txt'), POEM, 'utf8');
