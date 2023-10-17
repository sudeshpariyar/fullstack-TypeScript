import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { User } from "../entity/User";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const registerGeneralInfo = async (req: Request, res: Response) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  const user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = hashPassword;

  const userRepo = AppDataSource.getRepository(User);
  await userRepo.save(user);

  const { password, ...userInfo } = user;
  return res.send(userInfo);
};

export const login = async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);
  const userInfo = await userRepo.findOneBy({ email: req.body.email });

  if (userInfo) {
    const passwordcheck = bcrypt.compareSync(
      req.body.password,
      userInfo!.password
    );
    if (passwordcheck) {
      const { password, ...userData } = userInfo;
      return res.status(200).json(userData);
    } else {
      return res.status(400).json("Incorrect credentials");
    }
  } else {
    return res.status(400).json("User not found");
  }
};

export const getGeneralInfo = async (req: Request, res: Response) => {
  const allGeneralInfoRepo = AppDataSource.getRepository(User);
  const allGeneralInfo = await allGeneralInfoRepo.find();
  res.send(allGeneralInfo);
};
