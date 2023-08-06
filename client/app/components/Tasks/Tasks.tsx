"use client";
import React, { useState, useEffect, useCallback } from "react";
import { getAllTasks } from "@/api/tasks";
import { task } from "@/types/types";
import TaskCard from "./TaskCard";

const TaskView: React.FC = () => {
  const [initialTasks, setInitialTasks] = useState<task[]>([]);
  const [tasks, setTasks] = useState<task[]>([]);
  const [sortBy, setSortBy] = useState<"Fecha" | "Nombre">("Fecha");
  const [filterByStatus, setFilterByStatus] = useState<
    "Todas" | "Por hacer" | "En progreso" | "Hecho"
  >("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getTasks = useCallback(async () => {
    try {
      const response = await getAllTasks();
      setInitialTasks(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sortTasks = (tasks: task[], sortBy: "Fecha" | "Nombre") => {
    return tasks.sort((a, b) => {
      if (sortBy === "Fecha") {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB.getTime() - dateA.getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const filterTasks = (
    tasks: task[],
    filterByStatus: "Todas" | "Por hacer" | "En progreso" | "Hecho"
  ) => {
    if (filterByStatus === "Todas") {
      return tasks;
    } else {
      return tasks.filter((task) => task.status === filterByStatus);
    }
  };

  const searchTasks = (tasks: task[], searchQuery: string) => {
    if (searchQuery === "") {
      return tasks;
    } else {
      return tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };

  useEffect(() => {
    let filteredTasks = sortTasks(initialTasks, sortBy);
    filteredTasks = filterTasks(filteredTasks, filterByStatus);
    filteredTasks = searchTasks(filteredTasks, searchQuery);
    setTasks(filteredTasks);
  }, [sortBy, filterByStatus, searchQuery, initialTasks]);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-between">
        <h1 className="text-2xl font-semibold p-4">Lista de tareas</h1>
        <div className="flex sm:flex-row flex-col">
          <div className="flex sm:flex-row flex-col w-full">
            <label htmlFor="sort-select" className="mr-2">
              Ordenar por:
            </label>
            <select
              id="sort-select"
              className="border border-gray-300 rounded-md p-1 mr-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "Fecha" | "Nombre")}
            >
              <option value="date">Fecha de creación</option>
              <option value="name">Nombre</option>
            </select>
            <label htmlFor="status-select" className="mr-2">
              Filtrar por estado:
            </label>
            <select
              id="status-select"
              className="border border-gray-300 rounded-md p-1 mr-2"
              value={filterByStatus}
              onChange={(e) =>
                setFilterByStatus(
                  e.target.value as
                    | "Todas"
                    | "Por hacer"
                    | "En progreso"
                    | "Hecho"
                )
              }
            >
              <option value="Todas">Todos</option>
              <option value="Por hacer">Por hacer</option>
              <option value="En progreso">En progreso</option>
              <option value="Hecho">Hecho</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="border border-gray-300 rounded-md p-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskView;
