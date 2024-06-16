// import axios from "axios";
import { useState } from "react";
import EditTodo from "./EditTodo.jsx";

const Task = ({ todo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = (e) => {
    const idToDelete = e.target.id;
    onDelete(idToDelete);
  };

  const handleEdit = (id, newTodo) => {
    onEdit(id, newTodo);
    changeShowEdit();
  };

  const changeShowEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div>
      <p class="inline text-2xl ml-2">{todo.name}</p>
      <button
        id={todo.id}
        onClick={handleDelete}
        class="bg-red-500 rounded-full p-1 ml-3"
      >
        Delete
      </button>
      <button
        id={todo.id}
        onClick={changeShowEdit}
        class="bg-blue-500 rounded-full p-1 ml-3"
      >
        Edit
      </button>
    </div>
  );

  if (showEdit) {
    content = <EditTodo onConfirm={handleEdit} id={todo.id} />;
  }

  return <div class="m-6">{content}</div>;
};

export default Task;
