import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);

  return render(data);
};

const DesertsCount = () => {
  return (
    <DataFetcher
      url="https://restaurant/desserts"
      render={(data) => {
        return `Available deserts count: ${data.length}`;
      }}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://restaurant/drinks"
      render={(data) => {
        return `Available drinks count: ${data.length}`;
      }}
    />
  );
};

const Counts = () => {
  return (
    <>
      <p className="titles-style">Render props</p>
      <div>
        <DesertsCount />
      </div>
      <div>
        <DrinksCount />
      </div>
    </>
  );
};

export default Counts;
