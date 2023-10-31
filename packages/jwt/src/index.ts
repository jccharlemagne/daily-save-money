import { Secret, sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";

const createToken = (payload: object, secret: Secret, options?: SignOptions) =>
  sign(payload, secret, {
    algorithm: "ES256",
    ...options,
  });

const checkToken = (
  token: string,
  secret: Secret,
  options?: VerifyOptions & { complete?: false },
) => verify(token, secret, options);

export default {
  createToken,
  checkToken,
};
