# Task_Manager

- Node versión requerida v18.12.1
- Postgres requerido para base de datos

# Instalación de Backend

1. Poscionarse en la ruta /api con una terminal y ejecutando el comando npm install
2. Crear una base de datos local de postgres que matchee con estos parámetros (Orientarse con archivo ormconfig.json):
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "pass",
   "database": "postgres"
   Al archivo env.sample lo renombran a .env para tener el puerto correctamente configurado
3. Una ver creada la db inicializar la api todavía en la ruta api ejecutando el comando npm run dev.

# Instalación de FrontEnd

1. Posicionarse en la ruta /client con una terminar y ejecutar el comando npm install
2. Correr la app utilizando el comando npm run dev (Estando en la misma ruta /client)

# Inicializar

- En el navegador dirigirse a localhost:3001

# Importante!

- La app está configurada para utilizar el puerto 3000 para api y 3001 para el client si estos puertos están ocupados podría causar conflictos.
