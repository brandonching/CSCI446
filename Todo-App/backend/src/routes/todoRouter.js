import { Router } from "express";
import { ObjectId } from "mongodb";

const TodoRouter = Router();
TodoRouter.mergeParams = true;

TodoRouter.get("/", async (req, res) => {
  const db = req.app.get("db");
  const { projectId } = req.params;
  const todos = await db
    .collection("todos")
    .find({ project_id: new ObjectId(projectId) })
    .toArray();

  return res.json(todos);
});

TodoRouter.get("/:todoId", async (req, res) => {
  const db = req.app.get("db");
  const { projectId, todoId } = req.params;
  const todos = await db
    .collection("todos")
    .findOne({
      project_id: new ObjectId(projectId),
      _id: new ObjectId(todoId),
    });
  return res.json(todos);
});

TodoRouter.post("/", async (req, res) => {
  const db = req.app.get("db");
  const { projectId } = req.params;

  try {
    const result = await db.collection("todos").insertOne({
      ...req.body,
      project_id: new ObjectId(projectId),
    });
    console.info(result);
    res.status(201).json(result.insertedId);
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
});

export default TodoRouter;
