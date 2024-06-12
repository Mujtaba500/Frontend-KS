import Task from "./Task.jsx";

const TodoList = ({ todoList, onDelete }) => {
  const renderList = todoList.map((todo) => {
    return <Task todo={todo} todoList={todoList} onDelete={onDelete} />;
  });
  return <>{renderList}</>;
};

export default TodoList;
