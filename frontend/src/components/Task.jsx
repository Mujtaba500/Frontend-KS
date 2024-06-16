// import axios from "axios";
import { useState } from "react";

const Task = ({ todo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = (e) => {
    const idToDelete = e.target.id;
    onDelete(idToDelete);
  };

  let content = <p class="inline text-2xl ml-2">{todo.name}</p>;

  // if (showEdit) {
  //   content = <EditTodo />;
  // }

  return (
    <div class="m-6">
      {content}
      <button
        id={todo.id}
        onClick={handleDelete}
        class="bg-red-500 rounded-full p-1 ml-3"
      >
        Delete
      </button>
      <button
        id={todo.id}
        // onClick={changeShowEdit}
        class="bg-green-500 rounded-full p-1 ml-3"
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
