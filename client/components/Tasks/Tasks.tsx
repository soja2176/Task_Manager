"use client";
import React, { useState, useEffect } from "react";
import { getAllTasks } from "@/api/tasks";
import { task } from "@/types/types";

const Task: React.FC = () => {
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
      <h1>Task List</h1>
      <ul>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task?.id}>
              <h2>{task?.title}</h2>
              <p>{task?.description}</p>
              <p>Status: {task?.status}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Task;
