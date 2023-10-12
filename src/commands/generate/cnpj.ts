import { z } from "zod";
import parseInput from "../../core-utils/parseInput";
import { Command } from "commander";

export default function registerGenerateCnpj(program: Command) {
  program
    .command("generate.cnpj")
    .option("-a, --amount <amount>", "The amount of CNPJs to generate", "1")
    .option("-F, --formatted", "Format the CNPJs", false)
    .option("-S, --sorted", "Sorts the list", false)
    .option(
      "-s --startsWith <startsWith>",
      "Up to the first 12 digits of the CNPJs",
      ""
    )
    .action(cnpj)
    .description("Generates a list of CNPJs");
}

const InputSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: "amount must be a number" })
    .max(1000, "can only generate 1,000 CNPJs at a time")
    .default(1),
  formatted: z.boolean().default(false),
  sorted: z.boolean().default(false),
  startsWith: z
    .string()
    .max(12, "only the first 12 digits can be pre-defined")
    .refine(
      (startsWith) =>
        ![
          "000000000000",
          "111111111111",
          "222222222222",
          "333333333333",
          "444444444444",
          "555555555555",
          "666666666666",
          "777777777777",
          "888888888888",
          "999999999999",
        ].includes(startsWith),
      "CNPJs with all same digits are invalid"
    )
    .default(""),
});

function cnpj(options: unknown) {
  const parsedInput = parseInput(options, InputSchema);

  let CNPJs: string[] = [];

  for (let i = 0; i < parsedInput.amount; i++) {
    const startingDigitsAsString = parsedInput.startsWith.padEnd(
      12,
      `${Math.random()}`.slice(2)
    );

    const firstSecurityDigit = hashSecurityDigit(startingDigitsAsString);
    const secondSecurityDigit = hashSecurityDigit(
      startingDigitsAsString + firstSecurityDigit
    );

    CNPJs.push(
      `${startingDigitsAsString}${firstSecurityDigit}${secondSecurityDigit}`
    );
  }

  if (parsedInput.sorted) {
    CNPJs.sort();
  }

  if (parsedInput.formatted) {
    CNPJs = CNPJs.map(
      (CNPJ) =>
        `${CNPJ.slice(0, 2)}.${CNPJ.slice(2, 5)}.${CNPJ.slice(
          5,
          8
        )}/${CNPJ.slice(8, 12)}-${CNPJ.slice(12)}`
    );
  }

  console.log(CNPJs.join("\n"));
}

const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6];
function hashSecurityDigit(startingDigitsAsString: string) {
  let sum = 0;
  Array.from(startingDigitsAsString).forEach((digit, index) => {
    sum += Number(digit) * weights[startingDigitsAsString.length - 1 - index]!;
  });
  const mod = sum % 11;
  return `${mod < 2 ? "0" : 11 - mod}`;
}
