import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TakenTodo } from "../slices/asyncTodoSlice";
import axios, { AxiosError } from "axios";

const URL = "http://jsonplaceholder.typicode.com/todos";

interface NewTodo {
  title: string;
  completed: boolean;
}

/* 
    При работе с AsyncThunk мы также можем пользоваться generic type.
    !1-й аргумент - это то, что мы возращаем 
    !2-й аргумент - то, что мы передаём в качестве аргумента
    !3-й аргумент - это ThunkAPI, его придется определять вручную (лучше посмотреть инфу в документации)
*/
interface ThunkConfig {
  state: RootState;
  rejectValue: string;
}

export const fetchTodos = createAsyncThunk<TakenTodo[], void, ThunkConfig>(
  "fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TakenTodo[]>(`${URL}?_limit=10`);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("There was a error, try again later.");
      }
    }
  }
);

export const addNewTodo = createAsyncThunk<TakenTodo, string, ThunkConfig>(
  "createTodo",
  async (title, { rejectWithValue }) => {
    try {
      const newTodo: NewTodo = {
        title,
        completed: false,
      };
      const { data } = await axios.post<TakenTodo>(URL, newTodo);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("There was a error, try again later.");
      }
    }
  }
);

export const deleteTodoById = createAsyncThunk<number, number, ThunkConfig>(
  "deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${URL}/${id}`);

      return id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("There was a error, try again later.");
      }
    }
  }
);

export const changeCompleteStatus = createAsyncThunk<
  TakenTodo,
  number,
  ThunkConfig
>("changeCompleteStatus", async (id, { rejectWithValue, getState }) => {
  try {
    const currentCompleteStatus = getState().asyncTodos.todos.find(
      (todo) => todo.id === id
    )!.completed;
    const { data } = await axios.patch<TakenTodo>(`${URL}/${id}`, {
      completed: !currentCompleteStatus,
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("There was a error, try again later.");
    }
  }
});
