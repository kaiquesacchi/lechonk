import { Command } from "@commander-js/extra-typings";
import { getVersion } from "./getVersion";

import interactive from "../commands/interactive";
import nonInteractive from "../commands/non-interactive";

const program = new Command("le");

program.version(getVersion());

program
  .action(interactive)
  .description(
    "Set of helpful dev utilities. Call without a [command] to use the interactive mode."
  );

nonInteractive(program);

export default program;
