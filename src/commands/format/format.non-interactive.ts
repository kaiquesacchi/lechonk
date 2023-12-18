import { Command } from "@commander-js/extra-typings";
import json from "./json";
import csv from "./csv";

export default function nonInteractive(program: Command) {
  csv.nonInteractive(program);
  json.nonInteractive(program);
}
