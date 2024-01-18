const redux = require('redux');

const counterReducer = (state = {counter:20}, action) => {
    return {
        counter: state.counter - 5
    };
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'decrement'});