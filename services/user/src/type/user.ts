import { Document, Model } from "mongoose";

export interface User {
  email: string;
  name: string;
  picture: string;
}

export interface UserDoc extends User, Document {}

export interface UserAttrs extends User {}

export interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}
