import * as p from "@clack/prompts";
import cnpj from "./cnpj";
import cpf from "./cpf";

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

export default async function interactive() {
  const option = (await p.select({
    message: "What type of data do you want to generate?",
    options: interactiveOptions,
  })) as InteractiveOption;

  switch (option) {
    case "CNPJ":
      await cnpj.interactive();
      break;
    case "CPF":
      await cpf.interactive();
      break;
  }
}