import { Command } from "@commander-js/extra-typings";
import { getVersion } from "./getVersion";

import registerDecodeBase64 from "../commands/decode/base64";
import registerEncodeBase64 from "../commands/encode/base64";
import registerFormatJson from "../commands/format/json";
import registerGenerateCnpj from "../commands/generate/cnpj";
import registerGenerateCpf from "../commands/generate/cpf";
import registerToast from "../commands/toast";

const program = new Command("dev");

program.version(getVersion());

registerDecodeBase64(program);
registerEncodeBase64(program);
registerFormatJson(program);
registerGenerateCnpj(program);
registerGenerateCpf(program);
registerToast(program);

export default program;
