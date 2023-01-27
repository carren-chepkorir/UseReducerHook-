import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const Counter = () => {
  // const [count, setCount] = useState(0);
  // const [showText, SetShowText] = useState("true");
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="counter">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          // SetShowText(!showText);
        }}
      >
        click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default Counter;

// to apply useReducer hook we creat a single state declaration to replace the two usestates
//   the state (two states we have) and the dispatch action are objects
// dispatch is call whenever anything inside the state variable is altered
// we have to set the initial states of the two variables
