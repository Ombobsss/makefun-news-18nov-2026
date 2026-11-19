// make.fun entry — "Sum up 18 November's world news in one image".
// The image (entry.png, 1024x1024) is committed next to this file.
// The grader runs with no network, so this program only copies bytes
// into the output directory: deterministic, no dependencies, Node 22
// standard library only. It writes exactly one file,
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png locally).

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
