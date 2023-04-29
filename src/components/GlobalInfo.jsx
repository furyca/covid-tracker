import React from "react";
import { useSelector } from "react-redux";

const GlobalInfo = () => {
  const { confirmed, recovered, deaths, active, lastDate } = useSelector((state) => state.covidSlice);

  return (
    <div className="info-container">
      <div className="info-box infection-box">
        <h3>Infected</h3>
        <h2>{confirmed}</h2>
        <h3>Last Updated At:</h3>
        <p>{lastDate.slice(0, 10)}</p>
      </div>
      <div className="info-box recovery-box">
        <h3>Recovered</h3>
        <h2>{recovered}</h2>
        <h3>Last Updated At:</h3>
        <p>{lastDate.slice(0, 10)}</p>
      </div>
      <div className="info-box death-box">
        <h3>Deaths</h3>
        <h2>{deaths}</h2>
        <h3>Last Updated At:</h3>
        <p>{lastDate.slice(0, 10)}</p>
      </div>
      <div className="info-box active-box">
        <h3>Active</h3>
        <h2>{active}</h2>
        <h3>Last Updated At:</h3>
        <p>{lastDate.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default GlobalInfo;
