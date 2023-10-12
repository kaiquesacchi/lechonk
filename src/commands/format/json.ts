import { z } from "zod";
import parseInput from "../../core-utils/parseInput";
import type { Command } from "@commander-js/extra-typings";
import picocolors from "picocolors";

const BOOLEAN_REGEX = /^(true|false)$/;
const NUMBER_REGEX = /^-?(0|[1-9]\d*)(\.\d+)?([eE][-+]?\d+)?$/;
const STRING_REGEX = /^"(?:[^"\\]|\\["\\/bfnrt]|\\u[a-fA-F0-9]{4})*"$/;

export default function registerFormatJson(program: Command) {
  program
    .command("format.json <json>")
    .option("--no-color", "Disable colorized output")
    .option("-s, --spaces <spaces>", "Number of spaces to indent", "2")
    .action(json)
    .description("Formats a JSON file");
}

const InputSchema = z.object({
  color: z.boolean().default(true),
  json: z.string().transform((json, ctx) => {
    try {
      return JSON.parse(json);
    } catch (e) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid JSON" + (e instanceof Error ? `: ${e.message}` : ""),
      });
      return z.NEVER;
    }
  }),
  spaces: z.coerce.number().default(2),
});

function json(argument: string, options: object) {
  const parsedInput = parseInput({ json: argument, ...options }, InputSchema);

  let result = JSON.stringify(parsedInput.json, null, parsedInput.spaces);

  if (parsedInput.color) {
    result = colorizeJson(result);
  }

  console.log(result);
}

function colorizeJson(input: string) {
  function applyColor(str: string) {
    if (str.match(BOOLEAN_REGEX)) {
      return picocolors.cyan(str);
    } else if (str.match(NUMBER_REGEX)) {
      return picocolors.yellow(str);
    } else if (str.match(STRING_REGEX)) {
      return picocolors.green(str);
    } else {
      return picocolors.gray(str);
    }
  }

  return input
    .split("\n")
    .map((line) => {
      const splitted = line.split(": ");
      if (splitted.length === 2) {
        let endsInComma = false;
        if (splitted[1]?.endsWith(",")) {
          endsInComma = true;
          splitted[1] = splitted[1].slice(0, -1);
        }
        return `${splitted[0]}: ${applyColor(splitted[1] ?? "")}${
          endsInComma ? "," : ""
        }`;
      } else return line;
    })
    .join("\n");
}
