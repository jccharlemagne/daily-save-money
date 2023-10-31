import dotenv from "dotenv";

dotenv.config();

export interface GoogleEnv {
  GOOGLE_CLIENT_ID: string;
}

declare const process: {
  env: GoogleEnv;
};

export default {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
};
