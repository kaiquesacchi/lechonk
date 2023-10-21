import { Command } from "@commander-js/extra-typings";
import { cnpjUseCase } from "./cnpj.use-case";

export default function nonInteractive(program: Command) {
  program
    .command("generate.cnpj")
    .option("-a, --amount <amount>", "The amount of CNPJs to generate", "1")
    .option("-F, --formatted", "Format the CNPJs", false)
    .option("-S, --sorted", "Sorts the list", false)
    .option(
      "-s --startsWith <startsWith>",
      "Up to the first 12 digits of the CNPJs",
      ""
    )
    .action(cnpjUseCase)
    .description("Generates a list of CNPJs");
}
