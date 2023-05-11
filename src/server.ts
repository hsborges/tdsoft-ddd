import consola from "consola";
import express from "express";
import routes from "./routes";
import seed from "./seed";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import { readFileSync } from "fs";

export async function server() {
  await seed();

  const app = express();

  const file = readFileSync("./swagger-doc.yaml", "utf8");
  const swaggerDocument = YAML.parse(file);

  app.use(express.json());
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(routes);

  const port = process.env.PORT || 3000;

  return app.listen(port, () => {
    consola.success(`Server is running on http://localhost:${port}`);
  });
}

if (require.main === module) {
  server().catch((err) => {
    consola.error(err);
    process.exit(1);
  });
}
