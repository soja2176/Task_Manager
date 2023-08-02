import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/tasks';

const router = express.Router();
const taskRepository = getRepository(Task);

// Obtener todas las tareas
router.get('/tasks', async (_req: Request, res: Response) => {
  try {
    const tasks = await taskRepository.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Crear una nueva tarea
router.post('/tasks', async (req: Request, res: Response) => {
  const { name, description, status } = req.body;
  try {
    const newTask = taskRepository.create({ name, description, status });
    await taskRepository.save(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

// Actualizar una tarea
router.put('/tasks/:id', async (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const { name, description, status } = req.body;
    try {
      const task = await taskRepository.findOne({ where: { id: taskId } });
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      task.name = name;
      task.description = description;
      task.status = status;
      await taskRepository.save(task);
      res.json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
  });

// Eliminar una tarea
router.delete('/tasks/:id', async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  try {
    const task = await taskRepository.findOne({ where: { id: taskId } });
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    await taskRepository.remove(task);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

export default router;