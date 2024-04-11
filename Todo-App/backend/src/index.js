import express from "express";
import cors from "cors";
import TodoRouter from "./routes/todoRouter.js";
import ProjectRouter from "./routes/projectRouter.js";
import { MongoClient } from "mongodb";

async function connect() {
  const client = new MongoClient("mongodb://localhost:27017");
  const connection = await client.connect();
  return connection.db("spa-database");
}

const port = 3001;

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use("/todos", TodoRouter);
app.use("/project", ProjectRouter);

const database = await connect();
app.set("db", database);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);

  // Check if the database is connected
  if (database) {
    console.info("Database connected");
  } else {
    console.error("Database connection failed");
  }
});
