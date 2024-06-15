import axios from "axios";

const Task = ({ todo, todoList, onDelete }) => {
  const handleClick = (e) => {
    const idToDelete = e.target.id;
    const newTodoList = todoList.filter((todo) => todo.id != idToDelete);
    onDelete(newTodoList);

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
  };
  return (
    <div class="m-6">
      <input type="checkbox" />
      <p class="inline text-2xl ml-2">{todo.name}</p>
      <button
        id={todo.id}
        onClick={handleClick}
        class="bg-red-500 rounded-full p-1 ml-3"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
