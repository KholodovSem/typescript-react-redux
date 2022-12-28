import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { CardVariant } from "./Card";
import { ITOdo, IUser } from "../types";
import Card from "./Card";
import List from "./List";
import UserItem from "./UserItem";
import TodoItem from "./TodoItem";
import EventsExample from "./EventsExample";

/* 
    * Типизация хука useState
    const [data, setData] = useState<T>();
    Перед useState указываем тип, который хук будет возращать.
*/

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITOdo[]>([]);

  /* 
      Из аксиоса можно импортировать типы "AxiosResponse" и "AxiosError".
      AxiosResponse<T> - дженерик, поэтому для того чтобы мы не получали 
      "черный ящик", указываем, что мы ожидаем в ответе.
      AxiosResponse<IUser[]>
  */

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response: AxiosResponse<IUser[]>) => setUsers(response.data))
      .catch((error: AxiosError) => alert(error));

    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response: AxiosResponse<ITOdo[]>) => setTodos(response.data))
      .catch((error: AxiosError) => alert(error));
  }, []);

  return (
    <div>
      <EventsExample />
      <Card
        width='200px'
        height='200px'
        variant={CardVariant.outlined}
        onClick={() => console.log("Hello")}
      >
        <button>Click me!</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITOdo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </div>
  );
};

export default App;
