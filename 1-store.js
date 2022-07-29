const redux = require("redux");

const reducer = (state, action, ...arg) => {
  console.log(state, action);
  // reducer function
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const store = redux.createStore(reducer);

module.exports = store;
