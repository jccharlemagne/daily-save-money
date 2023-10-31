import connection from "./service/connection";
import jsonDecode from "./util/json/decode";
import jsonEncode from "./util/json/encode";

export { NatsConnection, Subscription } from "nats";

export type UserFindByEmailMessage = {
  email: string;
};

export type UserFindByEmailResponse = {
  email: string;
  name: string;
  picture: string;
};

export default {
  ...connection,
  jsonDecode,
  jsonEncode,
};
