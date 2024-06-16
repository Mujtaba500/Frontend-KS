import todoController from "../controller/todo/index.js";

import { Router } from "express";

const todoRouter = Router();

todoRouter.get("/todo", todoController.getTodoList);

todoRouter.post("/todo", todoController.createTodo);

todoRouter.delete("/todo/:id", todoController.deleteTodo);

todoRouter.put("/todo/:id", todoController.editTodo);

export default todoRouter;
