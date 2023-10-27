import * as p from "@clack/prompts";
import base64UseCase from "./base64.use-case";

export default async function interactive() {
  const input = await p.group({
    text: () =>
      p.text({
        message: "Provide the text to encode",
        defaultValue: "",
        placeholder: "",
      }),
  });

  base64UseCase(input.text);
}
