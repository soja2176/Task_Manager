"use client";
import React, { useState } from "react";
import { createTask } from "@/api/tasks";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { status } from "@/types/types";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<status>("Por hacer");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const taskData = { title, description: content, status };
      const newTask = await createTask(taskData);
      if (newTask) {
        alert("Tarea creada con exito");
        window.location.href = "/tasks";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4 flex flex-col">
        <h1 className="text-2xl font-semibold pb-4">
          Reportar una nueva tarea
        </h1>
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
          value={content}
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
          <option value="En progreso">En Progreso</option>
          <option value="Hecho">Hecho</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Crear Tarea
      </button>
    </form>
  );
};

export default TaskForm;
