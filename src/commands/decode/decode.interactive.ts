import interactivePath from "../../core-utils/interactive-path";
import base64 from "./base64";

export default async function interactive() {
  await interactivePath({
    query: "What type of encoded data do you want to decode?",
    options: [
      { value: "BASE64", label: "Base 64", callback: base64.interactive },
    ],
  });
}
