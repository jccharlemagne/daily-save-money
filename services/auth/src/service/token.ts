import jwt from "@jccharlemagne/jwt";
import jwtConfig from "../config/jwt";
import { User, UserToken } from "../type/user";

const createAccessToken = (user: User) =>
  jwt.createToken(user, jwtConfig.ACCESS_TOKEN_PRIVATE_KEY, {
    issuer: jwtConfig.ISSUER,
    expiresIn: jwtConfig.ACCESS_TOKEN_EXPIRES_IN,
  });

const createRefreshToken = (user: User) =>
  jwt.createToken(user, jwtConfig.REFRESH_TOKEN_PRIVATE_KEY, {
    issuer: jwtConfig.ISSUER,
    expiresIn: jwtConfig.REFRESH_TOKEN_EXPIRES_IN,
  });

const createTokens = async (user: User): Promise<UserToken> => {
  const results = await Promise.allSettled([
    createAccessToken(user),
    createRefreshToken(user),
  ]);

  const isRejected = !!results.find((res) => res.status === "rejected");

  if (isRejected) {
    throw new Error("Unable to create User token");
  }

  const [accessToken, refreshToken] = (
    results as PromiseFulfilledResult<string>[]
  ).map((res) => res.value);

  return {
    accessToken,
    refreshToken,
  };
};

export default {
  createTokens,
};
