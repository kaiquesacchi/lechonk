import picocolors from "picocolors";
import colorizeValue from "./colorize-value";

describe("utils/colorize-value", () => {
  it("should colorize boolean", () => {
    expect(colorizeValue("true")).toBe(picocolors.cyan("true"));
    expect(colorizeValue("false")).toBe(picocolors.cyan("false"));
  });

  it("should colorize number", () => {
    expect(colorizeValue(Number.MAX_SAFE_INTEGER.toString())).toBe(
      picocolors.yellow(Number.MAX_SAFE_INTEGER.toString())
    );
    expect(colorizeValue("1")).toBe(picocolors.yellow("1"));
    expect(colorizeValue("0")).toBe(picocolors.yellow("0"));
    expect(colorizeValue("-0")).toBe(picocolors.yellow("-0"));
    expect(colorizeValue("-1")).toBe(picocolors.yellow("-1"));
    expect(colorizeValue(Number.MIN_SAFE_INTEGER.toString())).toBe(
      picocolors.yellow(Number.MIN_SAFE_INTEGER.toString())
    );
  });

  it("should colorize string", () => {
    expect(colorizeValue('"hello"')).toBe(picocolors.green('"hello"'));
    expect(colorizeValue('"hello\nworld"')).toBe(
      picocolors.green('"hello\nworld"')
    );
    expect(colorizeValue('""')).toBe(picocolors.green('""'));
  });

  it("should colorize other values gray", () => {
    expect(colorizeValue("random-value")).toBe(picocolors.gray("random-value"));
    expect(colorizeValue("")).toBe(picocolors.gray(""));
    expect(colorizeValue("{}")).toBe(picocolors.gray("{}"));
  });
});
