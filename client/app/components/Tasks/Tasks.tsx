"use client";
import React, { useState, useEffect, useCallback } from "react";
import { getAllTasks } from "@/api/tasks";
import { task } from "@/types/types";
import TaskCard from "./TaskCard";
import Link from "next/link";
const TaskView: React.FC = () => {
  const [initialTasks, setInitialTasks] = useState<task[]>([]);
  const [tasks, setTasks] = useState<task[]>([]);
  const [sortBy, setSortBy] = useState<"ASC" | "DEC">("ASC");
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

  const sortTasks = (tasks: task[], sortBy: "ASC" | "DEC") => {
    if (sortBy === "ASC") {
      return tasks.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA.getTime() - dateB.getTime();
      });
    } else {
      return tasks.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB.getTime() - dateA.getTime();
      });
    }
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
        <div className="flex sm:flex-row flex-col sm:items-center">
          <div className="flex sm:flex-row flex-col w-full">
            <label htmlFor="sort-select" className="mr-2 font-semibold">
              Filtros:
            </label>
            <select
              id="sort-select"
              className="border border-gray-300 rounded-md p-1 sm:mr-2 h-8"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "ASC" | "DEC")}
            >
              <option value="ASC">Fecha de creación recientes</option>
              <option value="DEC">Fecha de creación antiguas</option>
            </select>
            <select
              id="status-select"
              className="border border-gray-300 rounded-md p-1 sm:mr-2 h-8"
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
              <option value="Todas">Todas</option>
              <option value="Por hacer">Por hacer</option>
              <option value="En progreso">En progreso</option>
              <option value="Hecho">Hecho</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="border border-gray-300 rounded-md p-1 h-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {initialTasks && initialTasks.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <h1 className="text-2xl font-semibold p-4">
            Aún no hay tareas reportadas
          </h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link href="/create">Reporta una nueva tarea</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskView;
