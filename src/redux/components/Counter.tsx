import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
  counterState,
  increment,
  decrement,
  changeIncrementAmount,
} from "../store";

const Counter = () => {
  const [amount, setAmount] = useState<number>(0);
  const { value, incrementAmount } = useAppSelector(counterState);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    setAmount(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeIncrementAmount(amount));
  };

  return (
    <div>
      <h1>
        Count: {value} | Increment Amount: {incrementAmount}
      </h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type={"number"} value={amount || ""} onChange={handleChange} />
        <button>Apply</button>
      </form>
    </div>
  );
};

export default Counter;
