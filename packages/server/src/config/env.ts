import dotenv from "dotenv";

dotenv.config();

interface Env {
  CORS_ORIGIN: string;
  CORS_METHODS: string;
  CORS_PREFLIGHT_CONTINUE: boolean;
  CORS_OPTIONS_SUCCESS_STATUS: number;
}

declare const process: {
  env: Env;
};

export default {
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  CORS_METHODS: process.env.CORS_METHODS || "GET,HEAD,PUT,PATCH,POST,DELETE",
  CORS_PREFLIGHT_CONTINUE: process.env.CORS_PREFLIGHT_CONTINUE || false,
  CORS_OPTIONS_SUCCESS_STATUS: process.env.CORS_OPTIONS_SUCCESS_STATUS || 204,
} as Env;
