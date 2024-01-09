export default function printTable(input: {
  header: readonly string[];
  body: readonly string[][];
  maxColumnLength: number;
}) {
  const columnLengths: number[] = [];
  input.header.forEach((header, index) => {
    columnLengths.push(
      Math.min(
        input.maxColumnLength,
        Math.max(
          header.length,
          ...input.body.map((row) => row[index]?.length ?? 0)
        )
      )
    );
  });

  // Print header
  console.log(
    input.header
      .map((cell, index) => formatCellWidth(cell, columnLengths[index]!))
      .join(" | ")
  );

  // Print separator
  console.log(
    "".padEnd(
      columnLengths.reduce((a, b) => a + b, 0) + 3 * (columnLengths.length - 1),
      "-"
    )
  );

  // Print body
  console.log(
    input.body
      .map((row) =>
        row
          .map((cell, index) => formatCellWidth(cell, columnLengths[index]!))
          .join(" | ")
      )
      .join("\n")
  );
}

function formatCellWidth(cell: string, width: number) {
  return cell.length > width
    ? cell.slice(0, width - 1) + "…"
    : cell.padEnd(width);
}
