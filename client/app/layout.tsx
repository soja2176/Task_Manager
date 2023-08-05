import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="flex h-[100vh] items-center justify-center">
          {children}
        </main>
        <footer className="bg-black h-5 p-1 fixed bottom-0 w-full justify-center items-center flex">
          <p className="text-white text-xs">Task Manager - Aguirre Santiago</p>
        </footer>
      </body>
    </html>
  );
}
