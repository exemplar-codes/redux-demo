const store = require("./1-store");

const countSubscriber = () => {
  const latestState = store.getState();
  console.log("Subscriber called", latestState);
};

const countSubscriber2 = () => {
  const latestState = store.getState();
  console.log("Subscriber2 called", latestState);
};

store.subscribe(countSubscriber, (state) => console.log(state));
store.subscribe(countSubscriber2);

console.log(store.getState());
store.dispatch({ type: "INCREMENT", payload: 1 });
console.log(store.getState());
store.dispatch({ type: "INCREMENT", payload: 100 });
console.log(store.getState());
