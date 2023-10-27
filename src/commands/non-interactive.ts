import { Command } from "@commander-js/extra-typings";
import format from "./format";
import generate from "./generate";
import toast from "./toast";
import registerDecodeBase64 from "./decode/base64";
import registerEncodeBase64 from "./encode/base64";

export default function nonInteractive(program: Command) {
  format.nonInteractive(program);
  generate.nonInteractive(program);
  toast.nonInteractive(program);

  registerDecodeBase64(program);
  registerEncodeBase64(program);
}
