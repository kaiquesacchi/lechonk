import { z } from "zod";
import parseInput from "../../../core/parseInput";
import { Base64 } from "js-base64";

const InputSchema = z.object({
  base64: z.string(),
});

export default function base64UseCase(argument: string) {
  const parsedInput = parseInput({ base64: argument }, InputSchema);
  const result = Base64.decode(parsedInput.base64);

  console.log(result);
}
