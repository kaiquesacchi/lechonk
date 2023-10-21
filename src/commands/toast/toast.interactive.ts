import * as p from "@clack/prompts";
import toastUseCase from "./toast.use-case";

export default async function interactive() {
  const input = await p.group({
    name: () =>
      p.text({
        message: "Name that should be toasted",
        placeholder: "World",
        defaultValue: "World",
      }),
  });
  p.outro("Toast below");

  toastUseCase(input.name);
}
