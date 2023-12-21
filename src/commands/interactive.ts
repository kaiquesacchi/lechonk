import interactivePath from "../core/interactive-path";

import decode from "./decode";
import encode from "./encode";
import format from "./format";
import generate from "./generate";
import toast from "./toast";

export default async function interactive() {
  interactivePath({
    query: "What do you want to do?",
    options: [
      {
        value: "DECODE",
        label: "Decode data",
        callback: decode.interactive,
      },
      {
        value: "ENCODE",
        label: "Encode data",
        callback: encode.interactive,
      },
      {
        value: "FORMAT",
        label: "Format data",
        callback: format.interactive,
      },
      {
        value: "GENERATE",
        label: "Generate data",
        callback: generate.interactive,
      },
      {
        value: "TOAST",
        label: "Toast",
        callback: toast.interactive,
      },
    ],
  });
}
