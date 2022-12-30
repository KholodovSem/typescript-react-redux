import { useAppDispatch, deleteTodoById, changeCompleteStatus } from "../store";
import { TakenTodo } from "../store/slices/asyncTodoSlice";

const TodoItem = ({ id, title, completed }: TakenTodo) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type={"checkbox"}
        checked={completed}
        onChange={() => dispatch(changeCompleteStatus(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodoById(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
