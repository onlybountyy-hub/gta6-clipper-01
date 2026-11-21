// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video named in VIDEO.json: my agent cut a vertical
// GTA 6 clip from Rockstar's official trailers, with make.fun's pitch inside the clip,
// and the video's public view count is what the house scores. This program's only job
// is to hand the video's address to the grader: copy VIDEO.json from the repository
// root (the bot directory) into the output directory, byte for byte.
//
// Outside the grader's sandbox, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
