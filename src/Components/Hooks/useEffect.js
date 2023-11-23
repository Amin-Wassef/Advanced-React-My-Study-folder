import { useEffect, useState } from "react";

function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  const ClickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Welcome Message" : "Advanced React App";
  }, [toggle]);
  //The dependency array determines: when the useEffect hook will be invoked

  //   document.title = toggle ? "Welcome Message" : "useEffect()";
  //   }, []);
  //   document.title = toggle ? "Welcome Message" : "useEffect()";
  //   });

  return (
    <>
      <p className="titles-style">useEffect hook in React</p>
      <button onClick={ClickHandler}>Toggle Message</button>
      {toggle && ( //brackets are because it is multiple lines .. if only 1 line, brackets will not be needed
        <h2>
          Welcome .. This is a Javascript expression in JSX to declare
          conditions in React instead of if (condition) {} else {} .. It uses
          Logical "&&" Operator .. Before "&&" considered the if condition and
          after the "&&" considered the condition result.
        </h2>
      )}
      {/* Other toggle option is Ternary Operator in {} <h2>{toggle ? "Message" : ""}</h2> */}
    </>
  );
}

export default ToggleButton;
