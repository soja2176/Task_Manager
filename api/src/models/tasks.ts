import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { status } from "../types/types";
enum Status {
  POR_HACER = "Por hacer",
  EN_PROGRESO = "En progreso",
  COMPLETADO = "Hecho",
}
@Entity()
class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({
    type: "enum",
    enum: Status,
  })
  status: status;

  @CreateDateColumn()
  created_at: Date;
}

export default Task;
