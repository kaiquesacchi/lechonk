import { Command } from "commander";
import { getVersion } from "./getVersion";

import registerToast from "../commands/toast";
import registerGenerateCpf from "../commands/generate/cpf";
import registerGenerateCnpj from "../commands/generate/cnpj";

const program = new Command("dev");

program.version(getVersion());

registerGenerateCnpj(program);
registerGenerateCpf(program);
registerToast(program);

export default program;
