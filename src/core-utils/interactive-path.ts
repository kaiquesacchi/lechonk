import * as p from "@clack/prompts";

type Input<TInteractiveOption extends string> = {
  query: string;
  options: {
    value: TInteractiveOption;
    label: string;
    callback: () => Promise<unknown>;
  }[];
};

export default async function interactivePath<
  TInteractiveOption extends string
>(input: Input<TInteractiveOption>) {
  const option = (await p.select({
    message: input.query,
    options: input.options as any,
  })) as TInteractiveOption;

  await input.options.find((item) => item.value === option)?.callback();
}
