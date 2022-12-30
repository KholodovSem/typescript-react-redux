import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";
import TodosComponent from "./components/TodosComponent";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Todos</h1>
      <TodosComponent />
    </Provider>
  );
};

export default App;
