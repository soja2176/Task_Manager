import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;

export const getTask = async (taskId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error al obtener la tarea");
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener las tareas");
  }
};

export const createTask = async (taskData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      "Error al crear la tarea. Por favor, verifica los datos proporcionados."
    );
  }
};

export const updateTask = async (taskId: number, taskData: any) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/tasks/${taskId}`,
      taskData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al actualizar la tarea");
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la tarea");
  }
};
