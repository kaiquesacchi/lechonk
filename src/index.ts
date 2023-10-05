import { Command } from "commander";
import { getVersion } from "./core-utils/getVersion";

const program = new Command();

program.version(getVersion()).name("dev");

program
  .command("toast <name>")
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  })
  .description("Toasts a name to check if the CLI works");

program.parse(process.argv);
