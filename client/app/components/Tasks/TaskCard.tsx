"use client";
import React from "react";
import { task } from "@/types/types";

interface TaskCardProps {
  task: task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const date = new Date(task.created_at);
  let statusClass = "";
  let statusText = "";
  switch (task.status) {
    case "Por hacer":
      statusClass = "bg-red-500";
      statusText = "Por hacer";
      break;
    case "En progreso":
      statusClass = "bg-yellow-500";
      statusText = "En progreso";
      break;
    case "Hecho":
      statusClass = "bg-green-500";
      statusText = "Hecho";
      break;
    default:
      break;
  }
  const selectTask = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    window.location.href = `/tasks/${task.id}`;
  };

  return (
    <div
      role="button"
      className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-md cursor-pointer hover:bg-gray-200 h-[350px] overflow-hidden"
      onClick={(event) => {
        selectTask(event);
      }}
    >
      <div className="flex flex-row justify-between">
        <div
          className={`text-white font-bold py-1 px-2 rounded inline-block whitespace-nowrap ${statusClass}`}
        >
          {statusText}
        </div>
        <div className="text-gray-500 text-sm">{date.toLocaleString()}</div>
      </div>
      <h2 className="text-lg font-bold mb-2">{task.title}</h2>
      <div
        className="overflow-y-auto h-[200px]"
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
    </div>
  );
};

export default TaskCard;
