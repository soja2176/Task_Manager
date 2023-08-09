import * as z from "zod";
import { task } from "../types/types";

const taskSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3),
  status: z.enum(["Por hacer", "En progreso", "Hecho"]),
});

export function validateTask(task: task) {
  return taskSchema.safeParse(task);
}
