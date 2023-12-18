import interactivePath from "../../core-utils/interactive-path";
import csv from "./csv";
import json from "./json";

export default async function interactive() {
  await interactivePath({
    query: "What type of data do you want to format?",
    options: [
      { value: "CSV", label: "CSV", callback: csv.interactive },
      { value: "JSON", label: "JSON", callback: json.interactive },
    ],
  });
}
