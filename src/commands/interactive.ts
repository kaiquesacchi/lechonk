import * as p from "@clack/prompts";

import generate from "./generate";
import toast from "./toast";
import format from "./format";

type InteractiveOption = "FORMAT" | "GENERATE" | "TOAST";

const interactiveOptions = [
  {
    value: "FORMAT",
    label: "Format data",
  },
  {
    value: "GENERATE",
    label: "Generate data",
  },
  {
    value: "TOAST",
    label: "Toast",
  },
] satisfies { value: InteractiveOption; label: string }[];

export default async function interactive() {
  p.intro("Lechonk CLI - Interactive mode");
  const option = (await p.select({
    message: "What would you like to do?",
    options: interactiveOptions,
  })) as InteractiveOption;

  switch (option) {
    case "FORMAT":
      await format.interactive();
      break;

    case "GENERATE":
      await generate.interactive();
      break;

    case "TOAST":
      await toast.interactive();
      break;
  }
}
