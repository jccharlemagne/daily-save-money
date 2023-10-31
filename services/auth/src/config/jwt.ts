import dotenv from "dotenv";

dotenv.config();

export interface JwtEnv {
  ACCESS_TOKEN_EXPIRES_IN: string;
  ACCESS_TOKEN_PRIVATE_KEY: string;
  ACCESS_TOKEN_PUBLIC_KEY: string;
  REFRESH_TOKEN_EXPIRES_IN: string;
  REFRESH_TOKEN_PRIVATE_KEY: string;
  REFRESH_TOKEN_PUBLIC_KEY: string;
  ISSUER: string;
}

declare const process: {
  env: JwtEnv;
};

export default {
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN || "2 hours",
  ACCESS_TOKEN_PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY.replace(
    /\\\n/g,
    "\n",
  ),
  ACCESS_TOKEN_PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY.replace(
    /\\\n/g,
    "\n",
  ),
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN || "30 days",
  REFRESH_TOKEN_PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY.replace(
    /\\\n/g,
    "\n",
  ),
  REFRESH_TOKEN_PUBLIC_KEY: process.env.REFRESH_TOKEN_PUBLIC_KEY.replace(
    /\\\n/g,
    "\n",
  ),
  ISSUER: process.env.ISSUER || "",
} as JwtEnv;
