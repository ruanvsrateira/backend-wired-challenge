import express, { json } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
