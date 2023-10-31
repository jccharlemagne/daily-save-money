import { model, Schema } from "mongoose";
import { UserAttrs, UserDoc, UserModel } from "../type/user";

const UserSchema: Schema<UserDoc> = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  picture: String,
});

UserSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = model<UserDoc, UserModel>("User", UserSchema);

export default User;
