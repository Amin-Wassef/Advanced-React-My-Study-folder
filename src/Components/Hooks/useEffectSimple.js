//Side Effect => is somthing that makes the function impure

//Pure function => no side effects
//It receives specific input (specific parameter) and always return the exact same output, no matter how many times it gets invoked.

//Impure function => has (do) side effects
//Means that it will do thing such as: invoke conole.log(), fetch, updatinng the browser tab and browser geolocation functionality
//Which means that the side effect is something external or outside the function

/**
  function ShoppingCart(props) {
  const total = props.count * props.price;
  console.log(total); => this console.log cause side effect
  return <h3>Total: {total}</h3>;
}

export default function UseEffect() {
  return (
    <>
      <p
        style={{
          color: "brown",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        useEffect hook in React
      </p>
      <ShoppingCart count={25} price={20} />
    </>
  );
}
 */

import { useEffect } from "react";

function ShoppingCart(props) {
  const total = props.count * props.price;
  /**
    useEffect(function() {
    console.log(total);
    }, []);
   */
  useEffect(
    () => {
      console.log(total);
    } /*[]*/ //I just wraped it as comment to do not get warning in the terminal that it is empty
  );
  return <h3>Total: {total}</h3>;
}

export default function UseEffectSimple() {
  return (
    <>
      <p className="titles-style">useEffect hook in React (Simple)</p>
      <ShoppingCart count={25} price={20} />
    </>
  );
}
