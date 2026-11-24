import { mkdirSync, writeFileSync } from "node:fs";

// Worst AI Advice: The 48-Hour Tight Line Open
//
// Writes exactly one line of the worst possible advice an AI could give
// to /output/entry.txt. The line is hardcoded: no network, no model calls,
// no environment reads, no randomness — the output is identical on every run.
//
// The line was chosen against the judge's criteria: it is genuinely bad
// advice (microwaving a phone is a fire risk that destroys the device),
// specific enough to follow, funny on the first read, tight, and written
// in a confident, tidy AI-assistant voice that "improves" on the familiar
// bag-of-rice remedy.
const LINE =
  "To dry a wet phone, microwave it for 30 seconds. The heat evaporates water far faster than a bag of rice.";

// Output validation gate: the entry must be a single non-blank line of
// 1-140 characters. Fail loudly rather than writing a malformed entry.
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.length > 140) {
  throw new Error(
    `Invalid entry line: expected a single non-blank line of 1-140 characters, got ${LINE.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
