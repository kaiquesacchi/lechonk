import * as p from "@clack/prompts";
import jsonUseCase from "./json.use-case";

export default async function interactive() {
  const input = await p.group({
    json: () =>
      p.text({
        message: "Provide the (partial) JSON",
        defaultValue: "{}",
        placeholder: "{}",
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
    spaces: () =>
      p.text({
        message: "How many spaces should be used to indent the JSON?",
        initialValue: "2",
        placeholder: "2",
      }),
  });

  jsonUseCase(input.json, input);
}
