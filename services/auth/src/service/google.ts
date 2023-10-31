import { OAuth2Client } from "google-auth-library";
import googleConfig from "../config/google";

const client = new OAuth2Client({
  clientId: googleConfig.CLIENT_ID,
});

const verifyToken = (token: string) =>
  client.verifyIdToken({
    idToken: token,
    audience: googleConfig.CLIENT_ID,
  });

export default {
  client,
  verifyToken,
};
