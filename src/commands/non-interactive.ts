import { Command } from "@commander-js/extra-typings";

import decode from "./decode";
import format from "./format";
import generate from "./generate";
import toast from "./toast";

import registerEncodeBase64 from "./encode/base64";

export default function nonInteractive(program: Command) {
  decode.nonInteractive(program);
  format.nonInteractive(program);
  generate.nonInteractive(program);
  toast.nonInteractive(program);

  registerEncodeBase64(program);
}
