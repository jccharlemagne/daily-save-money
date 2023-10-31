import dotenv from "dotenv";
import expressConfig, { ExpressEnv } from "./express";
import dbConfig, { DbEnv } from "./db";

dotenv.config();

interface Env {
  db: DbEnv;
  express: ExpressEnv;
}

export default {
  express: expressConfig,
  db: dbConfig,
} as Env;
