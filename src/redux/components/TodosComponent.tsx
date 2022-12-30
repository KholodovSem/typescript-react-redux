import { useState } from "react";
import { useAppDispatch, addNewTodo } from "../store";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const TodosComponent = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (title.trim().length) {
      dispatch(addNewTodo(title));
      setTitle("");
    }
  };

  return (
    <div className='App'>
      <NewTodoForm
        value={title}
        updateText={setTitle}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};

export default TodosComponent;
