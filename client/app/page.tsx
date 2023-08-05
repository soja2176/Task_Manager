export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen content-center">
      <h1 className="text-4xl font-bold">Bienvenido a tu Tablero de tareas</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        <a href="/create">Reporta una nueva tarea</a>
      </button>
    </div>
  );
}
