import type { Command } from "@commander-js/extra-typings";
import dataUseCase from "./data.use-case";

export default function registerGenerateCpf(program: Command) {
  program
    .command("generate.data types...")
    .option("-a, --amount <amount>", "The amount of rows to generate", "1")
    .option("-s, --seed <seed>", "The seed used by the RNG")
    .action(dataUseCase)
    .description("Generates a list of CPFs");
}
