import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager - Aguirre Santiago",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white">
        <Navbar />
        <main className="p-4">{children}</main>
        <footer className="bg-black h-5 p-1 bottom-0 w-full justify-center items-center fixed flex mt-4">
          <p className="text-white text-xs">Task Manager - Aguirre Santiago</p>
        </footer>
      </body>
    </html>
  );
}
