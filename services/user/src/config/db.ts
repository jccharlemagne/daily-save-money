import dotenv from "dotenv";

dotenv.config();

export interface DbEnv {
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

declare const process: {
  env: DbEnv;
};

export default {
  DB_HOST: process.env.DB_HOST || "db",
  DB_USER: process.env.DB_USER || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "user",
} as DbEnv;
