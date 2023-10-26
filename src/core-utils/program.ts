import { Command } from "@commander-js/extra-typings";
import { getVersion } from "./getVersion";

import registerDecodeBase64 from "../commands/decode/base64";
import registerEncodeBase64 from "../commands/encode/base64";
import registerFormatJson from "../commands/format/json";
import toast from "../commands/toast";

import interactive from "../commands/interactive";
import cnpj from "../commands/generate/cnpj";
import cpf from "../commands/generate/cpf";

const program = new Command("le");

program.version(getVersion());

program
  .action(interactive)
  .description(
    "Set of helpful dev utilities. Call without a [command] to use the interactive mode."
  );

registerDecodeBase64(program);
registerEncodeBase64(program);
registerFormatJson(program);
cnpj.nonInteractive(program);
cpf.nonInteractive(program);
toast.nonInteractive(program);

export default program;
