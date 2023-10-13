import type { Command } from "@commander-js/extra-typings";
import { z } from "zod";
import parseInput from "../../core-utils/parseInput";
import { Base64 } from "js-base64";

export default function registerDecodeBase64(program: Command) {
  program
    .command("decode.base64 <base64-text>")
    .action(decodeBase64)
    .description("Decodes the provided base64 to a utf-8 text");
}

const InputSchema = z.object({
  base64: z.string(),
});

function decodeBase64(argument: string) {
  const parsedInput = parseInput({ base64: argument }, InputSchema);
  const result = Base64.decode(parsedInput.base64);

  console.log(result);
}
