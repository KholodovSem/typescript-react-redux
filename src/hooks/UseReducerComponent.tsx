import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

enum CounterActionTypes {
  increment = "increment",
  decrement = "decrement",
}

type ACTION_TYPES =
  | { type: CounterActionTypes.increment; payload?: number }
  | { type: CounterActionTypes.decrement; payload?: number };

const reducer = (state: typeof initialState, action: ACTION_TYPES) => {
  switch (action.type) {
    case CounterActionTypes.increment: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case CounterActionTypes.decrement: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

function UseReducerComponent() {
  const [{ counter }, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: CounterActionTypes.increment });
  };
  const handleDecrement = () => {
    dispatch({ type: CounterActionTypes.decrement });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default UseReducerComponent;
