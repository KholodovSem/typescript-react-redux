import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  asyncTodosState,
  fetchTodos,
} from "../store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, isLoading, error } = useAppSelector(asyncTodosState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const content = todos.map((todo) => <TodoItem key={todo.id} {...todo} />);

  return <ul>{content}</ul>;
};

export default TodoList;
