import googleService from "./google";
import userRepository from "../repository/user";

const login = async (token: string) => {
  const ticket = await googleService.verifyToken(token);

  const payload = ticket.getPayload();

  if (!payload?.email) {
    throw new Error("Invalid token");
  }

  const user = await userRepository.findByEmail(payload.email);

  if (!user) {
    return userRepository.create(payload.email, payload.name, payload.picture);
  }

  return user;
};

export default {
  login,
};
