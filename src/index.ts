#!/usr/bin/env node

import program from "./core/program";

if (process.stdin.isTTY) {
  program.parse(process.argv);
} else {
  let pipedData = "";
  process.stdin.on("readable", function () {
    //@ts-ignore
    const chunk = this.read();
    if (chunk !== null) {
      pipedData += chunk;
    }
  });
  process.stdin.on("end", function () {
    program.parse([...process.argv, pipedData.trim()]);
  });
}
