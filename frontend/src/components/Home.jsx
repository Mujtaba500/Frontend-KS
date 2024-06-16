import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  //GET Todos from DB on page reload
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
        if (!err.response) {
          console.log(err.message);
        } else {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      });
  }, []);

  const addTodo = (todo) => {
    const todoWithId = {
      id: uuidv4(),
      name: todo,
    };
    const updatedTodoList = [...todoList, todoWithId];
    setTodoList(updatedTodoList);

    //ADD IN DB
    axios
      .post("http://localhost:3000/todo", {
        data: todoWithId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err.message);
        } else {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      });
  };

  const deleteTodo = (idToDelete) => {
    const newTodoList = todoList.filter((todo) => todo.id != idToDelete);

    //DELETE FROM DB
    axios
      .delete(`http://localhost:3000/todo/${idToDelete}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err.message);
        } else {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      });
    setTodoList(newTodoList);
  };

  const editTodo = (id, newTodo) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id == id) {
        return {
          id: id,
          name: newTodo,
        };
      } else {
        return todo;
      }
    });
    axios
      .put(`http://localhost:3000/todo/${id}`, {
        name: newTodo,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err.message);
        } else {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      });
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <h1 class="text-5xl  my-6">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList onDelete={deleteTodo} onEdit={editTodo} todoList={todoList} />
    </>
  );
};

export default Home;
