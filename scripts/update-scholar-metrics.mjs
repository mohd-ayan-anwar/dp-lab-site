
import fs from "node:fs/promises";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const dataFile = new URL("../data/researchMetrics.ts", import.meta.url);

const fields = [
  "publications",
  "citations",
  "hIndex",
  "i10Index",
];

async function main() {
  let source = await fs.readFile(dataFile, "utf8");

  const rl = readline.createInterface({ input: stdin, output: stdout });

  try {
    const updatedValues = {};

    for (const field of fields) {
      const regex = new RegExp(`${field}:\\s*(\\d+)`);
      const match = source.match(regex);

      if (!match) {
        throw new Error(`Could not find ${field} in researchMetrics.ts`);
      }

      const currentValue = Number(match[1]);
      const answer = await rl.question(
        `${field} [${currentValue}]: `
      );

      const value = answer.trim() === ""
        ? currentValue
        : Number(answer.trim());

      if (!Number.isSafeInteger(value) || value < 0) {
        throw new Error(`Invalid value for ${field}`);
      }

      updatedValues[field] = value;
    }

    for (const [field, value] of Object.entries(updatedValues)) {
      const regex = new RegExp(`(${field}:\\s*)\\d+`);
      source = source.replace(regex, `$1${value}`);
    }

    const now = new Date();
    const today = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("-");

    source = source.replace(
      /lastVerified:\s*"[^"]*"/,
      `lastVerified: "${today}"`
    );

    await fs.writeFile(dataFile, source, "utf8");

    console.log("\nGoogle Scholar metrics saved successfully!");
    console.log(updatedValues);
    console.log(`Last verified: ${today}`);
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error("Update failed:", error.message);
  process.exitCode = 1;
});
