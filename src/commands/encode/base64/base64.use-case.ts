import { z } from "zod";
import parseInput from "../../../core/parseInput";
import { Base64 } from "js-base64";

const InputSchema = z.object({
  text: z.string(),
});

export default function base64UseCase(argument: string) {
  const parsedInput = parseInput({ text: argument }, InputSchema);
  const result = Base64.encode(parsedInput.text);

  console.log(result);
}
