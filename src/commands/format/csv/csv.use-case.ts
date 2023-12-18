import { z } from "zod";
import parseInput from "../../../core-utils/parseInput";
import { parse } from "csv-parse/sync";

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

  const columnLengths = header.map((column) =>
    parsedInput.maxWidth
      ? Math.min(column.length, parsedInput.maxWidth)
      : column.length
  );

  const body = parsedCsv.map((row) => {
    const cells = Object.values(row);
    cells.forEach((cell, index) => {
      const requiredLength = parsedInput.maxWidth
        ? Math.min(parsedInput.maxWidth, cell.length)
        : cell.length;
      if (requiredLength > columnLengths[index]!) {
        columnLengths[index] = requiredLength;
      }
    });
    return cells;
  });

  printTable({ header, body, columnLengths });
}

function formatCellWidth(cell: string, width: number) {
  return cell.length > width
    ? cell.slice(0, width - 1) + "…"
    : cell.padEnd(width);
}

function printTable(input: {
  header: readonly string[];
  body: readonly string[][];
  columnLengths: readonly number[];
}) {
  // Print header
  console.log(
    input.header
      .map((cell, index) => formatCellWidth(cell, input.columnLengths[index]!))
      .join(" | ")
  );

  // Print separator
  console.log(
    "".padEnd(
      input.columnLengths.reduce((a, b) => a + b, 0) +
        3 * (input.columnLengths.length - 1),
      "-"
    )
  );

  // Print body
  console.log(
    input.body
      .map((row) =>
        row
          .map((cell, index) =>
            formatCellWidth(cell, input.columnLengths[index]!)
          )
          .join(" | ")
      )
      .join("\n")
  );
}
