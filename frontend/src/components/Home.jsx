import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setid] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => {
        const data = res.data;
        const todoListDb = data.map((todo) => {
          return {
            id: todo.id,
            name: todo.name,
          };
        });
        setTodoList(todoListDb);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });
  }, []);
  const addTodo = (todo) => {
    const todoWithId = {
      id: id,
      name: todo,
    };
    const updatedTodoList = [...todoList, todoWithId];
    setTodoList(updatedTodoList);
    setid((prev) => prev + 1);
  };
  const updateTodoList = (todoList) => {
    setTodoList(todoList);
  };
  return (
    <>
      <h1 class="text-5xl  my-6">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList onDelete={updateTodoList} todoList={todoList} />
    </>
  );
};

export default Home;
