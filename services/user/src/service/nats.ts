import nats, { NatsConnection } from "@jccharlemagne/nats";
import listeners from "./nats/listeners";

const subscriptions = [
  {
    name: "user.findByEmail",
    listener: listeners.findByEmail,
  },
  {
    name: "user.create",
    listener: listeners.create,
  },
];

const subscribe = (connection: NatsConnection, name: string) =>
  connection.subscribe(name);

const listen = async () => {
  const nc = await nats.getConnection();

  const errorHandler = (err: string) =>
    console.error(`💥  Subscription error : ${err}`);

  for (const subscription of subscriptions) {
    const ns = subscribe(nc, subscription.name);
    subscription.listener(ns);
  }
};

export default {
  listen,
};
