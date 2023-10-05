import { Command } from "commander";
import { getVersion } from "./getVersion";
import toast from "../commands/toast";

const program = new Command("dev");

program.version(getVersion());

program
  .command("toast <name>")
  .action(toast)
  .description("Toasts a name to check if the CLI works");

export default program;
