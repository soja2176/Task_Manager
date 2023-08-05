import { Request, Response } from "express";
import Task from "../models/tasks";

// Obtener una tarea
export const getTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  try {
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      return res.status(204).json({ error: "Tarea no encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
};

// Obtener todas las tareas
export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

// Crear una nueva tarea
export const createTask = async (req: Request, res: Response) => {
  const { name, description, status } = req.body;
  try {
    const newTask = new Task();
    newTask.name = name;
    newTask.description = description;
    newTask.status = status;
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "Error al crear la tarea. Por favor, verifica los datos proporcionados.",
    });
  }
};

// Actualizar una tarea
export const updateTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const { name, description, status } = req.body;
  try {
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      return res.status(204).json({ error: "Tarea no encontrada" });
    }
    task.name = name;
    task.description = description;
    task.status = status;
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

// Eliminar una tarea
export const deleteTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  try {
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      return res.status(204).json({ error: "Tarea no encontrada" });
    }
    await task.remove();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
