import dotenv from "dotenv";
import express, { ExpressEnv } from "./express";
import jwt, { JwtEnv } from "./jwt";

dotenv.config();

interface Env {
  express: ExpressEnv;
  jwt: JwtEnv;
}

export default {
  express,
  jwt,
} as Env;
