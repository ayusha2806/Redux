import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}

const countersSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload
        },
        decrese(state,action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = countersSlice.actions;
export default countersSlice.reducer;