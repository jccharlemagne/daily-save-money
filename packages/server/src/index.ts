import { json } from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import env from "./config/env";
import errorHandler from "./middleware/error";

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(morgan("combined"));
app.use(json());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: env.CORS_METHODS,
    preflightContinue: env.CORS_PREFLIGHT_CONTINUE,
    optionsSuccessStatus: env.CORS_OPTIONS_SUCCESS_STATUS,
  }),
);

export default {
  app,
  errorHandler,
};
