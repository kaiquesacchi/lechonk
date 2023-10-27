import generate from "./generate";
import toast from "./toast";
import format from "./format";
import interactivePath from "../core-utils/interactive-path";

export default async function interactive() {
  interactivePath({
    query: "What do you want to do?",
    options: [
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
