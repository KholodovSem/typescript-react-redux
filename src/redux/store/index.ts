import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./slices/counterSlice";
import { reducer as todosReducer } from "./slices/todosSlice";
import { reducer as asyncTodosReducer } from "./slices/asyncTodoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    asyncTodos: asyncTodosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./hooks";
export * from "./thunks/todos";
export { store };
export {
  increment,
  decrement,
  changeIncrementAmount,
  counterState,
} from "./slices/counterSlice";
export {
  addTodo,
  deleteTodo,
  toggleComplete,
  todoState,
} from "./slices/todosSlice";
export { asyncTodosState } from "./slices/asyncTodoSlice";
