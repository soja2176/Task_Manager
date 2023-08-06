"use client";
import React, { useState, useEffect } from "react";
import { getAllTasks } from "@/api/tasks";
import { task } from "@/types/types";
import TaskCard from "./TaskCard";

const TaskView: React.FC = () => {
  const [tasks, setTasks] = useState<task[]>([]);

  const getTasks = async () => {
    const response = await getAllTasks();
    setTasks(response);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold p-4">Lista de tareas</h1>
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
