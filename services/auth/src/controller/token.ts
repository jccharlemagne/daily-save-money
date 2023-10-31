import { Request, Response, NextFunction } from "express";
import userService from "../service/user";
import tokenService from "../service/token";

const authenticate = async (
  req: Request<unknown, unknown, { token: string }>,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.body;

  if (!token) {
    return next({
      status: 400,
      message: "No token provided",
    });
  }

  const user = await userService.login(token);

  if (!user) {
    return next({
      status: 400,
      message: "Unable to authenticate",
    });
  }

  const tokens = await tokenService.createTokens(user);
  res.status(200).json(tokens);
};

export default {
  authenticate,
};
