import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { User } from "../entity/User";

export const singleUser = async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);

  const userInfo = await userRepo.findOneBy({ uuid: req.params.id });
  if (userInfo) {
    const { password, ...userData } = userInfo;
    return res.status(200).json(userData);
  } else {
    return res.status(400).json("No user found");
  }
};
