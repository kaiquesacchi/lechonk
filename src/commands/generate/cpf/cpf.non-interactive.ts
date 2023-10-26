import type { Command } from "@commander-js/extra-typings";
import cpfUseCase from "./cpf.use-case";

export default function registerGenerateCpf(program: Command) {
  program
    .command("generate.cpf")
    .option("-a, --amount <amount>", "The amount of CPFs to generate", "1")
    .option("-F, --formatted", "Format the CPFs", false)
    .option("-S, --sorted", "Sorts the list", false)
    .option(
      "-s --startsWith <startsWith>",
      "Up to the first 9 digits of the CPFs",
      ""
    )
    .action(cpfUseCase)
    .description("Generates a list of CPFs");
}
