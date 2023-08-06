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

# Cuestiones a tener en cuenta a la hora de evaluar.

1. Se utilizó la última versión de Next, esta version (13) es reciente y trae muchos cambios (Importantes) en la forma de desarrollar.
   Se leyó la documentación correspondiente y se siguió la estructura de carpetas recomendadas por next, además se respetó la hidratación (Server side rendering y client).
   Con esto traté de demostrar mi capacidad de adaptarme a nuevas tecnologías, estos cambios se darán a nivel React por lo cual en nuevas apps
   los mas probable es que trabajemos de esta manera con esta tecnología.

Mas información aquí --> https://nextjs.org/blog/next-13

2. Tipado, el tipado es robusto y no se crearon tipos de forma innecesaria, se aprovechó al máximo la inferencia de datos y los tipos instalados para las librerías.

3. Tiempo, esto lo hice en mi tiempo libre de fin de semana, por supuesto dejé muchas cuestiones de lado para maximizar la eficiencia.
   con esto el producto se limitó mas que nada a los requerimientos ya que hay cosas a mejorar como la interfaz, la barra de navegación,
   crear un docker para el backend, los test y realizar ciertas validaciones. Este trabajo no demuestra completamente mi capacidad de determinar cuando un producto está listo.
   Creo que le faltan varias cosas por hacer.
