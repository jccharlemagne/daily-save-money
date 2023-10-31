import { JSONCodec } from "nats";

const jsonEncode = <T>(message: T) => JSONCodec<T>().encode(message);

export default jsonEncode;
