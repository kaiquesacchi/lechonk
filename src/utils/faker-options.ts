import { faker } from "@faker-js/faker";

const financeOptions = [
  "account",
  "accountName",
  "accountNumber",
  "amount",
  "bic",
  "bitcoinAddress",
  "creditCardCVV",
  "creditCardIssuer",
  "creditCardNumber",
  "currency",
  "currencyCode",
  "currencyName",
  "currencySymbol",
  "transactionDescription",
  "transactionType",
] as const satisfies Readonly<Array<keyof (typeof faker)["finance"]>>;

const internetOptions = ["email", "ip", "password"] as const satisfies Readonly<
  Array<keyof (typeof faker)["internet"]>
>;

const personOptions = [
  "bio",
  "firstName",
  "fullName",
  "gender",
  "jobArea",
  "jobDescriptor",
  "jobTitle",
  "jobType",
  "lastName",
  "prefix",
  "sex",
  "sexType",
  "suffix",
] as const satisfies Readonly<Array<keyof (typeof faker)["person"]>>;

export default {
  finance: financeOptions,
  internet: internetOptions,
  person: personOptions,
};
