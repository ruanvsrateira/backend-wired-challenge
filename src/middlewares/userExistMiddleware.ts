import { NextFunction, Request, Response } from "express";
import { UserModel } from "../schema/user";

export const UserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const userExist = await UserModel.findById(id);

    console.log("user exist =>", userExist);

    if (!userExist) {
      return res.status(404).send({ error: "User not found on this id" });
    }

    next();
  } catch (err) {
    return res.status(404).send({ error: "User not found on this id" });
  }
};
