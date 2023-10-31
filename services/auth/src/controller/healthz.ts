import { Request, Response } from "express";

const get = (req: Request, res: Response) => {
  res.json({
    healthy: true,
  });
};

export default { get };
