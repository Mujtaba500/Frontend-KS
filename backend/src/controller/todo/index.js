import todoModel from "../../model/todoList.js";
import { v4 as uuidv4 } from "uuid";

const todoController = {
  getTodoList: async (req, res) => {
    try {
      const todoList = await todoModel.findAll();
      if (todoList.length == 0) {
        return res.status(404).json({
          message: "No todo found",
        });
      }
      res.json(todoList);
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  createTodo: async (req, res) => {
    try {
      const payload = req.body;
      const newId = uuidv4();
      const newTodo = new todoModel();
      newTodo.name = payload.name;
      newTodo.id = newId;
      await newTodo.save();
      res.json({
        message: "Todo created",
      });
    } catch (err) {
      console.log("ERROR: ", err.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default todoController;
