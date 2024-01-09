import { z } from "zod";
import parseInput from "../../../core/parseInput";
import { faker } from "@faker-js/faker";
import fakerOptions from "../../../utils/faker-options";
import printTable from "../../../utils/print-table/print-table";

const InputSchema = z.object({
  types: z.array(
    z.enum([
      ...fakerOptions.person,
      ...fakerOptions.internet,
      ...fakerOptions.finance,
    ])
  ),
  // options
  amount: z.coerce
    .number({ invalid_type_error: "amount must be a number" })
    .max(100, "can only generate 100 rows at a time")
    .default(1),
  seed: z.string().optional(),
});

export default function dataUseCase(types: unknown, options: object) {
  const parsedInput = parseInput({ types, ...options }, InputSchema);
  const body: string[][] = [];

  if (parsedInput.seed) {
    let seed = 0;
    for (let i = 0; i < parsedInput.seed.length; i++) {
      seed += parsedInput.seed.charCodeAt(i);
    }
    faker.seed(seed);
  }

  for (let i = 0; i < parsedInput.amount; i++) {
    const row = parsedInput.types.map((type) => {
      if (fakerOptions.finance.includes(type)) {
        const value =
          faker.finance[type as (typeof fakerOptions.finance)[number]]();
        if (typeof value == "string") return value;
        return value.code;
      }
      if (fakerOptions.internet.includes(type))
        return faker.internet[type as (typeof fakerOptions.internet)[number]]();
      if (fakerOptions.person.includes(type))
        return faker.person[type as (typeof fakerOptions.person)[number]]();
      return "";
    });
    body.push(row);
  }

  printTable({
    header: parsedInput.types,
    body,
    maxColumnLength: 90,
  });
}
