import * as p from "@clack/prompts";
import { cnpjUseCase } from "./cnpj.use-case";

export default async function interactive() {
  const input = await p.group({
    amount: () =>
      p.text({
        message: "How many CNPJs do you want to generate?",
        defaultValue: "1",
        placeholder: "1",
      }),
    startsWith: () =>
      p.text({
        message:
          "Do you want to predefine up to the first 12 digits of the CNPJs?",
        defaultValue: "",
      }),
    formatted: () =>
      p.select({
        message: "Format the CNPJs?",
        initialValue: true,
        options: [
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ],
      }),
    sorted: () =>
      p.select({
        message: "Sort the list?",
        initialValue: true,
        options: [
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ],
      }),
  });

  cnpjUseCase(input);
}
