import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({ length: 40, nullable: false })
  firstName!: string;

  @Column({ length: 40, nullable: false })
  lastName!: string;

  @Column({ unique: true, nullable: false })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @OneToMany(() => Post, (post) => post.user)
  posts!: [Post];
}
