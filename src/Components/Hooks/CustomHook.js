import { useState, useEffect, useRef } from "react";
// import { usePrevious } from "react-use";

export default function Custom() {
  const [day, setDay] = useState("Monday");

  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <>
      <p className="titles-style">Custom Hook in React</p>
      <div style={{ padding: "40px" }}>
        <h1>
          Today is: {day}
          <br />
          {prevDay && <span>Previous work day was: {prevDay}</span>}
        </h1>
        <button onClick={getNextDay}>Get next day</button>
      </div>
    </>
  );
}

function usePrevious(val) {
  //As the custom function should uses at least "1" Hook (this info. was in the quiz)
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
