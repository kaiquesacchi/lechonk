import * as p from "@clack/prompts";
import base64UseCase from "./base64.use-case";

export default async function interactive() {
  const input = await p.group({
    base64: () =>
      p.text({
        message: "Provide the base64 encoded text",
        defaultValue: "",
        placeholder: "",
      }),
  });

  base64UseCase(input.base64);
}
