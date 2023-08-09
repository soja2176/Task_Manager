"use client";
import React, { useState, useEffect } from "react";
import { getTask, updateTask, deleteTask } from "@/api/tasks";
import { status } from "@/types/types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TaskFormProps {
  taskId: number;
}

const UpdateTaskForm: React.FC<TaskFormProps> = ({ taskId }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<status>("Por hacer");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const task = await getTask(taskId);
        if (task) {
          setTitle(task.title);
          setStatus(task.status);
          setContent(task.description);
        } else {
          alert("No se pudo encontrar la tarea");
        }
      } catch (error: any) {
        alert(error.message);
      }
    };
    fetchTask();
  }, [taskId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const taskData = { title, description: content, status };
      const updatedTask = await updateTask(taskId, taskData);
      if (updatedTask) {
        alert("Tarea actualizada con exito");
        window.location.href = "/tasks";
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const deletedTask = await deleteTask(taskId);
      if (deletedTask) {
        alert("Tarea eliminada con exito");
        window.location.href = "/tasks";
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4 flex flex-col">
        <label htmlFor="title" className="mb-2 font-bold">
          Titulo:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="description" className="mb-2 font-bold">
          Descripcion:
        </label>
        <ReactQuill
          value={content ? content : ""}
          onChange={setContent}
          className="bg-white"
        />
      </div>
      <div className="mb-4 flex flex-row items-center">
        <label htmlFor="status" className="mr-2 font-bold">
          Estado:
        </label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value as status)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Por hacer">Por hacer</option>
          <option value="En progreso">En progreso</option>
          <option value="Hecho">Hecho</option>
        </select>
      </div>
      <div className="flex flex-row justify-between gap-1">
        <button
          onClick={(event) => {
            handleDelete(event);
          }}
          className="px-4 py-2 w-full bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Eliminar Tarea
        </button>
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Actualizar Tarea
        </button>
      </div>
    </form>
  );
};

export default UpdateTaskForm;
