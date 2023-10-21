import { Command } from "@commander-js/extra-typings";
import { getVersion } from "./getVersion";

import registerDecodeBase64 from "../commands/decode/base64";
import registerEncodeBase64 from "../commands/encode/base64";
import registerFormatJson from "../commands/format/json";
import registerGenerateCpf from "../commands/generate/cpf";
import toast from "../commands/toast";

import interactive from "../commands/interactive";
import cnpj from "../commands/generate/cnpj";

const program = new Command("dev");

program.version(getVersion());

program.action(interactive);

registerDecodeBase64(program);
registerEncodeBase64(program);
registerFormatJson(program);
registerGenerateCpf(program);
cnpj.nonInteractive(program);
toast.nonInteractive(program);

export default program;
