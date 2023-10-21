import * as p from "@clack/prompts";

import generate from "./generate";
import toast from "./toast";

type InteractiveOption = "GENERATE" | "TOAST";

const interactiveOptions = [
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
  p.intro("DevTools CLI - Interactive mode");
  const option = (await p.select({
    message: "What would you like to do?",
    options: interactiveOptions,
  })) as InteractiveOption;

  switch (option) {
    case "GENERATE":
      await generate.interactive();
      break;

    case "TOAST":
      await toast.interactive();
      break;
  }
}
