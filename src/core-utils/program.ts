import { Command } from "commander";
import { getVersion } from "./getVersion";
import toast from "../commands/toast";
import cpf from "../commands/generate/cpf";

const program = new Command("dev");

program.version(getVersion());

program
  .command("toast <name>")
  .action(toast)
  .description("Toasts a name to check if the CLI works");

program
  .command("generate cpf")
  .option("-a --amount <amount>", "The amount of CPFs to generate")
  .option("-F --formatted", "Format the CPFs")
  .option("-S --sorted", "Sorts the list")
  .option(
    "-s --startsWith <startsWith>",
    "Up to the first 9 digits of the CPFs"
  )
  .action(cpf)
  .description("Generates a list of CPFs");

export default program;
