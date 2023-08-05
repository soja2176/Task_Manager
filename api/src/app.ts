import express from "express";
import morgan from "morgan";
import cors from "cors";
import Tasks from "./routes/tasks.routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use(Tasks);

export default app;
