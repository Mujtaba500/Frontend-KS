import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setid] = useState(1);
  const addTodo = (todo) => {
    const todoWithId = {
      id: id,
      todo: todo,
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
