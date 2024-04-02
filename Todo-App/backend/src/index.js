import express, { Router } from "express";
import TodoRouter from "./routes/todoRouter.js";

const port = 3001;

const app = express();
app.use(express.json());

app.use(TodoRouter);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
