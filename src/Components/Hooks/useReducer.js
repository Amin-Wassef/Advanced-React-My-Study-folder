import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy ingredients" && state.money > 0)
    return { money: state.money - 10 };
  if (action.type === "sell a meal") return { money: state.money + 10 };
  return state;
};

function UseReducer() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [state, dispatch] = useReducer(reducer, {money: 100}); dispatch = إرسال

  return (
    <>
      <p className="titles-style">useReducer hook in React</p>
      <h1>Wallet: {state.money}$</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy ingredients" })}>
          Shopping for veggies!
        </button>
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => dispatch({ type: "sell a meal" })}
        >
          Serve a meal
        </button>
      </div>
    </>
  );
}

export default UseReducer;
