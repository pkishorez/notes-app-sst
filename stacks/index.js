import StorageStack from "./storage-stack";
import ApiStack from "./api-stack";
import AuthStack from "./auth-stack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });

  const storageStack = new StorageStack(app, "storage");
  const apiStack = new ApiStack(app, "api", {
    table: storageStack.table,
  });

  new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });

  // Add more stacks
}
