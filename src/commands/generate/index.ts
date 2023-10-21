import * as p from "@clack/prompts";
import cnpj from "./cnpj";

type InteractiveOption = "CNPJ" | "CPF";

const interactiveOptions = [
  {
    value: "CNPJ",
    label: "CNPJ",
  },
  {
    value: "CPF",
    label: "CPF",
  },
] satisfies { value: InteractiveOption; label: string }[];

export default {
  interactive: async function () {
    const option = (await p.select({
      message: "What type of data do you want to generate?",
      options: interactiveOptions,
    })) as InteractiveOption;

    switch (option) {
      case "CNPJ":
        await cnpj.interactive();
        break;
      case "CPF":
        // await cpf.interactive();
        break;
    }
  },
};
