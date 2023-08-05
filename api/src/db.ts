import { DataSource } from "typeorm";
import Task from "./models/tasks";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pass",
  database: "postgres",
  entities: [Task],
  synchronize: true,
  logging: true,
});
