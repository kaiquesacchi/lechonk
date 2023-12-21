import cnpj from "./cnpj";
import cpf from "./cpf";
import interactivePath from "../../core/interactive-path";

export default async function interactive() {
  interactivePath({
    query: "What type of data do you want to generate?",
    options: [
      {
        value: "CNPJ",
        label: "CNPJ",
        callback: cnpj.interactive,
      },
      {
        value: "CPF",
        label: "CPF",
        callback: cpf.interactive,
      },
    ],
  });
}
