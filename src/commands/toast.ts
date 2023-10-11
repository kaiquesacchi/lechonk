import { Command } from "commander";

export default function registerToast(program: Command) {
  program
    .command("toast <name>")
    .action(toast)
    .description("Toasts a name to check if the CLI works");
}

function toast(name: string) {
  console.log(`Hello, ${name}!`);
}
