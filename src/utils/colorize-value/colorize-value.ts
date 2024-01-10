import picocolors from "picocolors";

const BOOLEAN_REGEX = /^(true|false)$/;
const NUMBER_REGEX = /^-?(0|[1-9]\d*)(\.\d+)?([eE][-+]?\d+)?$/;
// cspell:ignore bfnrt
const STRING_REGEX = /^"(?:[^"\\]|\\["\\/bfnrt]|\\u[a-fA-F0-9]{4})*"$/;

export default function colorizeValue(str: string) {
  if (str.match(BOOLEAN_REGEX)) {
    return picocolors.cyan(str);
  } else if (str.match(NUMBER_REGEX)) {
    return picocolors.yellow(str);
  } else if (str.match(STRING_REGEX)) {
    return picocolors.green(str);
  } else {
    return picocolors.gray(str);
  }
}
