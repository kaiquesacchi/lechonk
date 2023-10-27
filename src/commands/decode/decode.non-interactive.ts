import { Command } from "@commander-js/extra-typings";
import base64 from "./base64";

export default function nonInteractive(program: Command) {
  base64.nonInteractive(program);
}
