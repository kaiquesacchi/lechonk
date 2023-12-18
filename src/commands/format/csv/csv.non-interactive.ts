import type { Command } from "@commander-js/extra-typings";
import csvUseCase from "./csv.use-case";

export default function registerFormatCsv(program: Command) {
  program
    .command("format.csv <csv>")
    .option("--no-color", "Disable colorized output")
    .option("-m, --maxWidth <number>", "Max column width", "")
    .action((arg, options) => csvUseCase({ ...options, csv: arg }))
    .description("Formats a csv string as a table.");
}
