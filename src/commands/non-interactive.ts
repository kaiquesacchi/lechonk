import { Command } from "@commander-js/extra-typings";

import decode from "./decode";
import encode from "./encode";
import format from "./format";
import generate from "./generate";
import toast from "./toast";

export default function nonInteractive(program: Command) {
  decode.nonInteractive(program);
  encode.nonInteractive(program);
  format.nonInteractive(program);
  generate.nonInteractive(program);
  toast.nonInteractive(program);
}
