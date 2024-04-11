import { Router } from "express";
import { ObjectId } from "mongodb";
import TodosRouter from "./todoRouter.js";

const ProjectRouter = Router();

ProjectRouter.use("/:projectId/todo", TodosRouter);

ProjectRouter.get("/", async (req, res) => {
  const db = req.app.get("db");
  const projects = await db.collection("projects").find().toArray();

  return res.json(projects);
});

ProjectRouter.get("/:id", async (req, res) => {
  const db = req.app.get("db");
  const todo = await db
    .collection("projects")
    .findOne({ _id: new ObjectId(req.params.id) });

  return res.json(todo);
});

ProjectRouter.post("/", async (req, res) => {
  const db = req.app.get("db");

  try {
    const result = await db.collection("projects").insertOne(req.body);
    console.info(result);
    res.status(201).json(result.insertedId);
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
});

ProjectRouter.put("/:id", async (req, res) => {
  req.body._id = new ObjectId(req.params.id);
  const db = req.app.get("db");
  try {
    const updateResult = await db
      .collection("projects")
      .update({ _id: new ObjectId(req.params.id) }, req.body);
    console.info(updateResult);
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  return res.status(200).end();
});

ProjectRouter.delete("/:id", async (req, res) => {
  const db = req.app.get("db");
  try {
    await db
      .collection("projects")
      .deleteOne({ _id: new ObjectId(req.params.id) });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  return res.status(200).end();
});
export default ProjectRouter;
