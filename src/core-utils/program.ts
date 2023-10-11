import { Command } from "commander";
import { getVersion } from "./getVersion";

import registerToast from "../commands/toast";
import registerGenerateCpf from "../commands/generate/cpf";

const program = new Command("dev");

program.version(getVersion());

registerGenerateCpf(program);
registerToast(program);

export default program;
