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
