import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { nanoid } from "nanoid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { reducer } = todosSlice;
export const { addTodo, deleteTodo, toggleComplete } = todosSlice.actions;
export const todoState = (state: RootState) => state.todos;
