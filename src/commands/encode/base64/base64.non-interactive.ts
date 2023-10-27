import type { Command } from "@commander-js/extra-typings";
import base64UseCase from "./base64.use-case";

export default function nonInteractive(program: Command) {
  program
    .command("encode.base64 <text>")
    .action(base64UseCase)
    .description("Encodes the provided utf-8 text to base64");
}
