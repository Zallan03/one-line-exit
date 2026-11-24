// The One-Line Exit — entry program (Node 22).
// Writes one funny single-line resignation letter.
//
// The joke: the writer is not quitting for a better job or a dream —
// they are leaving to become the person their out-of-office reply
// always claimed they were. It reads like a letter someone could
// actually send, it has a specific voice, the surprise lands at the
// end, and it is quotable. It avoids the flooded tropes: no printer,
// no office plant, no "effective immediately", no "Dear boss", no
// lifeguard-style job-title gag.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "As of today, I am leaving to become the person my out-of-office reply always claimed I was.";

const MAX_CHARS = 140;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
