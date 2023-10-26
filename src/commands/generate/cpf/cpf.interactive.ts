import * as p from "@clack/prompts";
import cpfUseCase from "./cpf.use-case";

export default async function interactive() {
  const input = await p.group({
    amount: () =>
      p.text({
        message: "How many CPFs do you want to generate?",
        defaultValue: "1",
        placeholder: "1",
      }),
    startsWith: () =>
      p.text({
        message:
          "Do you want to predefine up to the first 9 digits of the CPFs?",
        defaultValue: "",
      }),
    formatted: () =>
      p.select({
        message: "Format the CPFs?",
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

  cpfUseCase(input);
}
