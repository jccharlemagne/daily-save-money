import { JSONCodec, StringCodec } from "nats";

const decode = <T>(message: Uint8Array): T => JSONCodec<T>().decode(message);

export default decode;
