import { FC } from "react";
import { ITOdo } from "../types";

interface TodoItemProps {
  todo: ITOdo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type={"checkbox"} checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
