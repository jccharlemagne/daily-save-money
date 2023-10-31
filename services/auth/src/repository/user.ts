import nats from "@jccharlemagne/nats";
import { User } from "../type/user";

const findByEmail = async (email: string) => {
  const nc = await nats.getConnection();

  const response = await nc.request(
    "user.findByEmail",
    nats.jsonEncode({ email }),
  );

  return nats.jsonDecode<User | null>(response.data);
};

const create = async (email: string, name?: string, picture?: string) => {
  const nc = await nats.getConnection();

  const response = await nc.request(
    "user.create",
    nats.jsonEncode({ name, email, picture }),
  );

  return nats.jsonDecode<User | null>(response.data);
};

export default {
  findByEmail,
  create,
};
