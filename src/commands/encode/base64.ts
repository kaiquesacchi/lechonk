import type { Command } from "@commander-js/extra-typings";
import { z } from "zod";
import parseInput from "../../core-utils/parseInput";
import { Base64 } from "js-base64";

export default function registerEncodeBase64(program: Command) {
  program
    .command("encode.base64 <text>")
    .action(encodeBase64)
    .description("Encodes the provided utf-8 text to base64");
}

const InputSchema = z.object({
  text: z.string(),
});

function encodeBase64(argument: string) {
  const parsedInput = parseInput({ text: argument }, InputSchema);
  const result = Base64.encode(parsedInput.text);

  console.log(result);
}
