import { DataSource } from 'typeorm';
import Task from '../src/models/tasks';

async function createDatabaseConnection(): Promise<any> {
  try {
    const connection = await new DataSource({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'db',
      entities: [Task],
      synchronize: true,
    });
    console.log('Conexión con la base de datos establecida.');
    return connection;
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    return null;
  }
}

export default createDatabaseConnection;