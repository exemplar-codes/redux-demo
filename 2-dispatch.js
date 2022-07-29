const store = require("./1-store");

console.log(store.getState());
store.dispatch({ type: "INCREMENT", payload: 1 });
console.log(store.getState());
store.dispatch({ type: "INCREMENT", payload: 100 });
console.log(store.getState());
