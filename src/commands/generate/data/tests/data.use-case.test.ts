import printTable from "../../../../utils/print-table/print-table";
import dataUseCase from "../data.use-case";

jest.mock("../../../../utils/print-table/print-table");

describe("generate/data/data.use-case", () => {
  it("should generate data", () => {
    dataUseCase(["firstName", "lastName", "email"], {
      amount: 4,
      seed: "SEED",
    });
    expect(printTable).toHaveBeenCalledTimes(1);
    expect(printTable).toHaveBeenCalledWith({
      body: [
        ["Monica", "Ledner", "Meagan88@hotmail.com"],
        ["Reba", "Quitzon", "Haylie36@hotmail.com"],
        ["Keira", "Kuhn", "Braeden.Casper79@yahoo.com"],
        ["Sunny", "Pfannerstill", "Summer.Vandervort@hotmail.com"],
      ],
      header: ["firstName", "lastName", "email"],
      maxColumnLength: 90,
    });
  });
});
