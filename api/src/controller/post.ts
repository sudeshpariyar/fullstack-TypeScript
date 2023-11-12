import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Post } from "../entity/Post";

export const newPost = async (req: Request, res: Response) => {
  const newPost = new Post();
  newPost.title = req.body.title;
  newPost.description = req.body.description;
  newPost.user = req.body.userId;
  if (newPost.user) {
    const postRepo = AppDataSource.getRepository(Post);
    await postRepo.save(newPost);
    return res.send(newPost);
  } else {
    return res.status(400).json("No user found");
  }
};
