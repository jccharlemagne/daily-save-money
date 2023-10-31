import mongoose from "mongoose";
import dbConfig from "../config/db";

const { DB_HOST, DB_NAME } = dbConfig;

const connect = () => {
  mongoose.connection
    .on("error", () => console.error.bind(console, "❌  Connection error :"))
    .once("open", () => console.info(`✅  Connection to database succeeded`));

  return mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`);
};

export default {
  connect,
};
