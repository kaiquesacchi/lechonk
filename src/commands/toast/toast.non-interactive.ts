import type { Command } from "@commander-js/extra-typings";
import toastUseCase from "./toast.use-case";

export default function nonInteractive(program: Command) {
  program
    .command("toast <name>")
    .action(toastUseCase)
    .description("Toasts a name to check if the CLI works");
}
