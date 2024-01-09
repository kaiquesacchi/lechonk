import { z } from "zod";
import parseInput from "../../../core/parseInput";
import { parse } from "csv-parse/sync";
import printTable from "../../../utils/print-table/print-table";

const InputSchema = z.object({
  color: z.boolean().default(true),
  csv: z.string().trim(),
  delimiter: z.string().default(","),
  maxWidth: z
    .literal("")
    .transform(() => undefined)
    .or(
      z
        .string()
        .transform((value) => parseInt(value))
        .refine((value) => !isNaN(value) && value > 1, {
          message: "maxWidth must be a number greater than 1",
        })
    ),
});

export default async function csvUseCase(input: z.input<typeof InputSchema>) {
  const parsedInput = parseInput(input, InputSchema);
  const parsedCsv = parse(parsedInput.csv, {
    columns: true,
    delimiter: parsedInput.delimiter,
    trim: true,
  }) as Record<string, string>[];

  if (!parsedCsv?.[0]) {
    console.log("Empty CSV");
    return;
  }

  const header = Object.keys(parsedCsv[0]);
  const body = parsedCsv.map((row) => Object.values(row));

  printTable({
    header,
    body,
    maxColumnLength: parsedInput.maxWidth ?? Infinity,
  });
}
