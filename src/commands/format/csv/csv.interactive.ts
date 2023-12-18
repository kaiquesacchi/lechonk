import * as p from "@clack/prompts";
import csvUseCase from "./csv.use-case";

export default async function interactive() {
  const input = await p.group({
    csv: () =>
      p.text({
        message: "Provide the CSV text",
        defaultValue: "",
        placeholder: "",
      }),
    color: () =>
      p.select({
        message: "Should the output be colorized?",
        initialValue: true,
        options: [
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ],
      }),
    maxWidth: () =>
      p.text({
        message:
          "What should be the max column width? (Keep it empty for no limit)",
        initialValue: "",
        placeholder: "",
      }),
  });

  console.log(input);
  csvUseCase(input);
}
