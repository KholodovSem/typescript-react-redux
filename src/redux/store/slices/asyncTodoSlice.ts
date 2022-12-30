import { RootState } from "./../index";
import { createSlice, isRejected, isAnyOf, isPending } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addNewTodo,
  deleteTodoById,
  changeCompleteStatus,
} from "../thunks/todos";

export interface TakenTodo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosSlice {
  isLoading: boolean;
  error: null | string;
  todos: TakenTodo[];
}

const initialState: TodosSlice = {
  isLoading: false,
  error: null,
  todos: [],
};

const asyncTodoSlice = createSlice({
  name: "asyncTodoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //* Fetch Todos
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    });

    //* Add new todo
    builder.addCase(addNewTodo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos.push(payload);
    });

    //* Delete todo
    builder.addCase(deleteTodoById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    });

    //* Patch todo
    builder.addCase(changeCompleteStatus.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
    });

    //Pending
    builder.addMatcher(isAnyOf(isPending), (state) => {
      state.isLoading = true;
    });

    //!Error
    builder.addMatcher(isAnyOf(isRejected), (state, { payload }) => {
      if (typeof payload === "string") {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { reducer } = asyncTodoSlice;
export const asyncTodosState = (state: RootState) => state.asyncTodos;
