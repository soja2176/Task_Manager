import express from 'express';
import bodyParser from 'body-parser';
import createDatabaseConnection from '../database/db';
import tasksRouter from './controllers/tasksController';

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Crear la conexión con la base de datos y luego configurar las rutas
// createDatabaseConnection().then(() => {
//   app.use('/api', tasksRouter);

//   // Iniciar el servidor
//   app.listen(PORT, () => {
//     console.log(`Servidor Express escuchando en el puerto ${PORT}`);
//   });
// });

(async () => {
  await createDatabaseConnection();
  // Importing routes after connection has been established
  app.use('/api', tasksRouter);

  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  });
})();