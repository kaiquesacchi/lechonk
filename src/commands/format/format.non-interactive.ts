import { Command } from "@commander-js/extra-typings";
import json from "./json";

export default function nonInteractive(program: Command) {
  json.nonInteractive(program);
}
