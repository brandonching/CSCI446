import express from "express";
import cors from "cors";
import TodoRouter from "./routes/todoRouter.js";

const port = 3001;

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use(TodoRouter);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
