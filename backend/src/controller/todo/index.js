import todoModel from "../../model/todoList.js";

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
      const payload = req.body.data;
      const newTodo = new todoModel();
      newTodo.name = payload.name;
      newTodo.id = payload.id;
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
  deleteTodo: async (req, res) => {
    try {
      const id = req.params.id;
      const todoTobedestroyed = await todoModel.findByPk(id);
      if (!todoTobedestroyed) {
        return res.status(404).json({
          message: "Todo not found in dataBase",
        });
      }
      await todoModel.destroy({
        where: {
          id: id,
        },
      });
      res.json({
        message: "Todo Deleted",
      });
    } catch (err) {
      console.log("ERROR", err.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default todoController;
