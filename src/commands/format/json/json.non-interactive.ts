import type { Command } from "@commander-js/extra-typings";
import jsonUseCase from "./json.use-case";

export default function registerFormatJson(program: Command) {
  program
    .command("format.json <json>")
    .option("--no-color", "Disable colorized output")
    .option("-s, --spaces <spaces>", "Number of spaces to indent", "2")
    .action(jsonUseCase)
    .description(
      "Formats a JSON string. If the JSON is incomplete, it will be partially parsed."
    );
}
