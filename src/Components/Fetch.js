import { useEffect, useState } from "react";

function Fetch() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  console.log(Object.keys(btcData).length);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className="titles-style">Fetch in React</p>
      {Object.keys(btcData).length > 0 ? (
        <>
          <h1>Current BTC/USD data</h1>
          <p>Code: {btcData.code}</p>
          <p>Symbol: {btcData.symbol}</p>
          <p>Rate: {btcData.rate}</p>
          <p>Description: {btcData.description}</p>
          <p>Rate Float: {btcData.rate_float}</p>
          {/* if the data contain an image that I want to show it:
          <img src={btcData.picture.large} alt="" /> 
          Means I should add it as normal img adding*/}
        </>
      ) : (
        <h3>Data Pending...</h3>
      )}
    </>
  );
}

export default Fetch;
