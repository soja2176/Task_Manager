import React from "react";
import Link from "next/link";

const Navbar = () => {
  const routes = [
    { path: "/tasks", label: "Tareas Reportadas" },
    { path: "/create", label: "Reporta una nueva tarea" },
  ];
  return (
    <nav className="bg-gray-800 w-full h-11 flex items-center px-4">
      <ul className="flex flex-row justify-between items-center">
        {routes.map((route) => (
          <li
            key={route.path}
            className="mr-4 hover:cursor-pointer hover:text-gray-300 hover:underline text-white"
          >
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
