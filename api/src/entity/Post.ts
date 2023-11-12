import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({ nullable: false })
  title!: string;

  @Column({ length: 40, nullable: false })
  description!: string;

  @ManyToOne(() => User, (user) => user.posts)
  user!: User;
}
