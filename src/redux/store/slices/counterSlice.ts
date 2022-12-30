import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface CounterState {
  value: number;
  incrementAmount: number;
}

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },

    decrement: (state) => {
      state.value -= state.incrementAmount;
    },

    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const { reducer } = counterSlice;
export const counterState = (state: RootState) => state.counter;
export const { increment, decrement, changeIncrementAmount } =
  counterSlice.actions;
