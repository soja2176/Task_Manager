import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await AppDataSource.initialize();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
