import todoController from "../controller/todo/index.js";

import { Router } from "express";

const todoRouter = Router();

todoRouter.get("/todo", todoController.getTodoList);

todoRouter.post("/todo", todoController.createTodo);

export default todoRouter;
