import { z } from "zod";
import parseInput from "../../core-utils/parseInput";
import { Command } from "commander";

export default function registerGenerateCpf(program: Command) {
  program
    .command("generate.cpf")
    .option("-a --amount <amount>", "The amount of CPFs to generate", "1")
    .option("-F --formatted", "Format the CPFs", false)
    .option("-S --sorted", "Sorts the list", false)
    .option(
      "-s --startsWith <startsWith>",
      "Up to the first 9 digits of the CPFs",
      ""
    )
    .action(cpf)
    .description("Generates a list of CPFs");
}

const InputSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: "amount must be a number" })
    .max(1000, "can only generate 1,000 CPFs at a time")
    .default(1),
  formatted: z.boolean().default(false),
  sorted: z.boolean().default(false),
  startsWith: z
    .string()
    .max(9, "only the first 9 digits can be pre-defined")
    .refine(
      (startsWith) =>
        ![
          "111111111",
          "222222222",
          "333333333",
          "444444444",
          "555555555",
          "666666666",
          "777777777",
          "888888888",
          "999999999",
        ].includes(startsWith),
      "CPFs with all same digits cannot be generated"
    )
    .default(""),
});

function cpf(_name: string, options: unknown) {
  const parsedInput = parseInput(options, InputSchema);

  let cpfs: string[] = [];

  for (let i = 0; i < parsedInput.amount; i++) {
    const startingDigitsAsString = parsedInput.startsWith.padEnd(
      9,
      `${Math.random()}`.slice(2)
    );
    const firstSecurityDigit = hashSecurityDigit(startingDigitsAsString);
    const secondSecurityDigit = hashSecurityDigit(
      startingDigitsAsString.slice(1) + firstSecurityDigit
    );
    cpfs.push(
      `${startingDigitsAsString}${firstSecurityDigit}${secondSecurityDigit}`
    );
  }

  if (parsedInput.sorted) {
    cpfs.sort();
  }

  if (parsedInput.formatted) {
    cpfs = cpfs.map(
      (cpf) =>
        `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(
          9,
          11
        )}`
    );
  }

  console.log(cpfs.join("\n"));
}

function hashSecurityDigit(startingDigitsAsString: string) {
  let sum = 0;
  Array.from(startingDigitsAsString).forEach((digit, index) => {
    sum += Number(digit) * (10 - index);
  });
  const mod = sum % 11;
  return `${mod < 2 ? "0" : 11 - mod}`;
}
