import { Router } from "express";
import * as fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const TodoRouter = Router();

TodoRouter.get("/todo", async (request, response) => {
  try {
    // Return all the todo items
    const directory = await fs.readdir("storage/");
    const todoResponse = await Promise.all(
      directory.map(async (file) => {
        const data = await fs.readFile(`storage/${file}`);
        return JSON.parse(data);
      })
    );

    response.json(todoResponse);
  } catch (error) {
    console.error(error);
    response.status(404).json({ error: "Todo not found" });
  }
});

TodoRouter.get("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(`storage/${id}.json`);
    const todoItem = JSON.parse(data);
    res.json(todoItem);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Todo not found" });
  }
});

TodoRouter.post("/todo", async (req, res) => {
  try {
    const newTodo = {
      id: uuidv4(),
      description: req.body.description,
      completed: req.body.completed || false,
    };

    await fs.writeFile(`storage/${newTodo.id}.json`, JSON.stringify(newTodo));
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

TodoRouter.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(`storage/${id}.json`);
    const todoItem = JSON.parse(data);
    const updatedTodo = {
      id: todoItem.id,
      description: req.body.description,
      completed: req.body.completed,
    };

    await fs.writeFile(`storage/${id}.json`, JSON.stringify(updatedTodo));
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(404).send("Todo not found: Cannot update todo item");
  }
});

TodoRouter.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await fs.unlink(`storage/${id}.json`);
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(404).send("Todo not found: Cannot delete todo item");
  }
});

export default TodoRouter;
