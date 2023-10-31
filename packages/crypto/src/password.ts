import bcrypt from "bcryptjs";

const hash = (password: string) => bcrypt.hash(password, 10);

const compare = (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);

export default {
  hash,
  compare,
};
