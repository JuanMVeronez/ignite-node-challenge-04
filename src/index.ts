import express from "express";
import { setup, serve } from "swagger-ui-express";

import swaggerSetup from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", serve, setup(swaggerSetup));

export { app };
