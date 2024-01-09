import printTable from "./print-table";

describe("utils/print-table", () => {
  const spyConsole = jest.spyOn(console, "log");

  it("should print a minimal table", () => {
    printTable({
      header: ["a", "b", "c"],
      body: [
        ["1", "2", "3"],
        ["4", "5", "6"],
      ],
      maxColumnLength: 5,
    });

    expect(spyConsole).toHaveBeenCalledTimes(3);
    expect(spyConsole).toHaveBeenNthCalledWith(1, "a | b | c");
    expect(spyConsole).toHaveBeenNthCalledWith(2, "---------");
    expect(spyConsole).toHaveBeenNthCalledWith(3, "1 | 2 | 3\n4 | 5 | 6");
  });

  it("scale column length properly", () => {
    printTable({
      header: ["Big Header", "Small", "Tiny"],
      body: [
        ["abcdefghijklmnopqrstuvwxyz", "abcde", "abc"],
        ["large cell", "abc", "def"],
      ],
      maxColumnLength: 5,
    });

    expect(spyConsole).toHaveBeenCalledTimes(3);
    expect(spyConsole).toHaveBeenNthCalledWith(1, "Big … | Small | Tiny");
    expect(spyConsole).toHaveBeenNthCalledWith(2, "--------------------");
    expect(spyConsole).toHaveBeenNthCalledWith(
      3,
      // cspell:disable-next-line
      "abcd… | abcde | abc \nlarg… | abc   | def "
    );
  });
});
