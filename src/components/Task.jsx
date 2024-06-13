const Task = ({ todo, todoList, onDelete }) => {
  const handleClick = (e) => {
    const idToDelete = e.target.id;
    const newTodoList = todoList.filter((todo) => todo.id != idToDelete);
    onDelete(newTodoList);
  };
  return (
    <div class="m-6">
      <input type="checkbox" />
      <p class="inline text-2xl ml-2">{todo.todo}</p>
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
