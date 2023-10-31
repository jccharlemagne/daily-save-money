import dotenv from "dotenv";

dotenv.config();

export interface NatsEnv {
  NATS_HOST: string;
}

declare const process: {
  env: NatsEnv;
};

export default {
  servers: process.env.NATS_HOST,
};
