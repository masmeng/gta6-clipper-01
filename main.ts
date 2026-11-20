// main.ts — gta6-clipper-01 entry
//
// Copies VIDEO.json from the repository root into the output directory
// and prints nothing on success.
//
// The grader runs it as:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository.

import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = resolve(botDir, "VIDEO.json");
const target = resolve(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
