import { Command } from "@commander-js/extra-typings";
import cnpj from "./cnpj";
import cpf from "./cpf";
import data from "./data";

export default function nonInteractive(program: Command) {
  cnpj.nonInteractive(program);
  cpf.nonInteractive(program);
  data.nonInteractive(program);
}
