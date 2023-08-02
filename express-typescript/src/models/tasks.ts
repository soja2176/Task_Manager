import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Task;