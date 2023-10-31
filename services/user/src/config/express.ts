import dotenv from "dotenv";

dotenv.config();

export interface ExpressEnv {
  PORT: number;
}

declare const process: {
  env: ExpressEnv;
};

export default {
  PORT: process.env.PORT || 4000,
} as ExpressEnv;
