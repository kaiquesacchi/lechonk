//cspell:disable
import csvUseCase from "../csv.use-case";
import printTable from "../../../../utils/print-table/print-table";
jest.mock("../../../../utils/print-table/print-table");

describe("format/csv/csv.use-case", () => {
  it("should handle a big input", () => {
    csvUseCase({
      csv: `id,firstname,lastname,email,profession
        100,Ezmeralda,Tufts,Ezmeralda.Tufts@yopmail.com,firefighter
        101,Giustina,Radu,Giustina.Radu@yopmail.com,police officer
        102,Britte,Alrich,Britte.Alrich@yopmail.com,doctor
        103,Aryn,Erminia,Aryn.Erminia@yopmail.com,police officer
        104,Mariann,Grosz,Mariann.Grosz@yopmail.com,doctor
        105,Sharai,Behre,Sharai.Behre@yopmail.com,firefighter
        106,Joelly,Thilda,Joelly.Thilda@yopmail.com,worker
        107,Gianina,Wilkinson,Gianina.Wilkinson@yopmail.com,police officer
        108,Karly,Howlyn,Karly.Howlyn@yopmail.com,developer
        109,Jordan,Yorick,Jordan.Yorick@yopmail.com,developer
        110,Marti,Tryck,Marti.Tryck@yopmail.com,doctor
        111,Kittie,McLaughlin,Kittie.McLaughlin@yopmail.com,doctor
        112,Loree,Genna,Loree.Genna@yopmail.com,doctor
        113,Evita,Atcliffe,Evita.Atcliffe@yopmail.com,developer
        114,Christal,Elisha,Christal.Elisha@yopmail.com,doctor
        115,Goldie,Zuzana,Goldie.Zuzana@yopmail.com,developer
        116,Rosene,Odell,Rosene.Odell@yopmail.com,firefighter
        117,Maud,Knowling,Maud.Knowling@yopmail.com,police officer
        118,Adelle,Lissi,Adelle.Lissi@yopmail.com,developer
        119,Starla,Buckler,Starla.Buckler@yopmail.com,police officer
      `,
      maxWidth: "10",
    });

    expect(printTable).toHaveBeenCalledWith({
      body: [
        [
          "100",
          "Ezmeralda",
          "Tufts",
          "Ezmeralda.Tufts@yopmail.com",
          "firefighter",
        ],
        [
          "101",
          "Giustina",
          "Radu",
          "Giustina.Radu@yopmail.com",
          "police officer",
        ],
        ["102", "Britte", "Alrich", "Britte.Alrich@yopmail.com", "doctor"],
        [
          "103",
          "Aryn",
          "Erminia",
          "Aryn.Erminia@yopmail.com",
          "police officer",
        ],
        ["104", "Mariann", "Grosz", "Mariann.Grosz@yopmail.com", "doctor"],
        ["105", "Sharai", "Behre", "Sharai.Behre@yopmail.com", "firefighter"],
        ["106", "Joelly", "Thilda", "Joelly.Thilda@yopmail.com", "worker"],
        [
          "107",
          "Gianina",
          "Wilkinson",
          "Gianina.Wilkinson@yopmail.com",
          "police officer",
        ],
        ["108", "Karly", "Howlyn", "Karly.Howlyn@yopmail.com", "developer"],
        ["109", "Jordan", "Yorick", "Jordan.Yorick@yopmail.com", "developer"],
        ["110", "Marti", "Tryck", "Marti.Tryck@yopmail.com", "doctor"],
        [
          "111",
          "Kittie",
          "McLaughlin",
          "Kittie.McLaughlin@yopmail.com",
          "doctor",
        ],
        ["112", "Loree", "Genna", "Loree.Genna@yopmail.com", "doctor"],
        ["113", "Evita", "Atcliffe", "Evita.Atcliffe@yopmail.com", "developer"],
        ["114", "Christal", "Elisha", "Christal.Elisha@yopmail.com", "doctor"],
        ["115", "Goldie", "Zuzana", "Goldie.Zuzana@yopmail.com", "developer"],
        ["116", "Rosene", "Odell", "Rosene.Odell@yopmail.com", "firefighter"],
        [
          "117",
          "Maud",
          "Knowling",
          "Maud.Knowling@yopmail.com",
          "police officer",
        ],
        ["118", "Adelle", "Lissi", "Adelle.Lissi@yopmail.com", "developer"],
        [
          "119",
          "Starla",
          "Buckler",
          "Starla.Buckler@yopmail.com",
          "police officer",
        ],
      ],
      header: ["id", "firstname", "lastname", "email", "profession"],
      maxColumnLength: 10,
    });
  });
});
