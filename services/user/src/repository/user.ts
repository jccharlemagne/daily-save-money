import User from "../model/user";

const initiate = (name: string, email: string, picture: string) =>
  User.build({
    name,
    email,
    picture,
  });

const find = async (email: string) => User.findOne({ email });

export default {
  initiate,
  find,
};
