import nats from "@jccharlemagne/nats";
import app from "./app";
import expressConfig from "./config/express";

const PORT = expressConfig.PORT;

nats
  .getConnection()
  .then(() => console.log(`✅  Connection to NATS succeded`))
  .then(() =>
    app.listen(PORT, () =>
      console.info(`🚀  Listening auth service on :${PORT}`),
    ),
  )
  .catch((err) => console.error(`💥  App broken: ${err}`));
