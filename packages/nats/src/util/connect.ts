import { connect, NatsConnection } from "nats";
import natsConfig from "../config/nats";

const nats = (() => {
  let connection: NatsConnection;

  const hasConnection = () => !!connection;
  const createConnection = async () => connect(natsConfig);

  return {
    getConnection: async () => {
      if (!hasConnection()) {
        connection = await createConnection();
      }

      return connection;
    },
  };
})();

export default nats;
