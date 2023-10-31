import app from "../app";
import expressConfig from "../config/express";

const { PORT } = expressConfig;

const listen = () =>
  app.listen(PORT, () =>
    console.info(`🚀  Listening user service on :${PORT}`),
  );

export default {
  listen,
};
