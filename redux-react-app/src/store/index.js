import { createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true}

const countersSlice = createSlice({
    name: 'counter',
    initialState,
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



const store = configureStore({
    reducer: countersSlice.reducer 
});

export const counterActions = countersSlice.actions;

export default store;