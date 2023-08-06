import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { status } from "../types/types";

@Entity()
class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({
    default: "Por hacer",
  })
  status: status;

  @CreateDateColumn()
  created_at: Date;
}

export default Task;
