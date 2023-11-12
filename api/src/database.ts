import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  //logging: true,
  entities: [User, Post],
  synchronize: true,
  subscribers: [],
  migrations: [],
});
