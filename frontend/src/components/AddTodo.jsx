import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    onAdd(todo);
    setTodo("");
  };
  return (
    <>
      <input
        id="todo"
        value={todo}
        onChange={handleChange}
        type="text"
        class="bg-white my-6 text-black"
      />
      <br />
      <button class="bg-slate-400 p-2 rounded" onClick={handleClick}>
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;
