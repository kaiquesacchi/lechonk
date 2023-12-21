import picocolors from "picocolors";
import { exit } from "process";
import { ZodSchema, ZodTypeDef } from "zod";

export default function parseInput<TOutput>(
  input: unknown,
  schema: ZodSchema<TOutput, ZodTypeDef, unknown>
) {
  const parsedInput = schema.safeParse(input);

  if (!parsedInput.success) {
    console.log(picocolors.bgYellow(picocolors.white("Invalid input")));
    console.log(
      picocolors.yellow(
        parsedInput.error.issues
          .map((i) => `${picocolors.bold(i.path.join("."))}: ${i.message}`)
          .join("\n")
      )
    );
    exit(0);
  }

  return parsedInput.data;
}
