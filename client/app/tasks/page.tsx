import React, { useState, useEffect } from "react";
import { getAllTasks } from "@/api/tasks";

const Tasks: React.FC = () => {
  console.log(getAllTasks());
  return (
    <div>
      <h1>Task Template</h1>
      <p>Este es un template para la ruta /task</p>
    </div>
  );
};

export default Tasks;
