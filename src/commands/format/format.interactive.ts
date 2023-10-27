import interactivePath from "../../core-utils/interactive-path";
import json from "./json";

export default async function interactive() {
  await interactivePath({
    query: "What type of data do you want to format?",
    options: [{ value: "JSON", label: "JSON", callback: json.interactive }],
  });
}
