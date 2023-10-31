export interface User {
  _id: string;
  name: string;
  email: string;
  picture: string;
}

export interface UserToken {
  accessToken: string;
  refreshToken: string;
}
