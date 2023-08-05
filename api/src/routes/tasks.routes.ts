import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
  getTask,
} from "../controllers/tasks.controller";

const router = Router();

// Obtener una tarea
router.get("/tasks/:id", getTask);

// Obtener todas las tareas
router.get("/tasks", getAllTasks);

// Crear una nueva tarea
router.post("/tasks", createTask);

// Actualizar una tarea
router.put("/tasks/:id", updateTask);

// Eliminar una tarea
router.delete("/tasks/:id", deleteTask);

export default router;
