import { useState } from "react";

const EditTodo = ({ onConfirm, id }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    onConfirm(id, newTodo);
  };

  return (
    <>
      <input
        value={newTodo}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
        class="bg-white text-black"
      />
      <button onClick={handleClick} class="bg-green-500 rounded-full p-1 ml-3">
        Confirm
      </button>
    </>
  );
};

export default EditTodo;
