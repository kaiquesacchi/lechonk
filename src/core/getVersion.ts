import path from "path";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";

export const getVersion = () => {
  const packageJsonPath = path.join(__dirname, "../../", "package.json");

  const packageJsonContent = fs.readJSONSync(packageJsonPath) as PackageJson;

  return packageJsonContent.version ?? "1.0.0";
};
