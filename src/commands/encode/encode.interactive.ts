import interactivePath from "../../core/interactive-path";
import base64 from "./base64";

export default async function interactive() {
  await interactivePath({
    query: "How do you want to encode the data?",
    options: [
      { value: "BASE64", label: "Base 64", callback: base64.interactive },
    ],
  });
}
