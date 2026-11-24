import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "Away — my houseplant runs my inbox now. It judged your email, found it lacking sunlight, and let it die quietly.";

// The gate allows at most 120 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 120) {
  throw new Error(`entry is ${[...entry].length} characters, over the 120 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
