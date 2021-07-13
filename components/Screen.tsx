import React, { FC, useContext } from "react";

import { CarContext } from "../context/CarContext";

const Screen: FC = () => {
  const isEngineOn = useContext(CarContext).isEngineOn;
  const oilLevel = useContext(CarContext).oilLevel;
  const error = useContext(CarContext).error;
  const isBeingFixed = useContext(CarContext).isBeingFixed;
  const carActions = useContext(CarContext).actions;

  const carStartHandler = () => {
    carActions.start();
  };

  const carStopHandler = () => {
    carActions.stop();
  };

  const carGoHandler = () => {
    carActions.go(Math.random() * 100);
  };

  const fixHandler = () => {
    carActions.fix();
  };

  return (
    <>
      <button disabled={isEngineOn || oilLevel === 0} onClick={carStartHandler}>
        Start
      </button>
      <button disabled={!isEngineOn} onClick={carStopHandler}>
        Stop
      </button>
      <button disabled={!isEngineOn} onClick={carGoHandler}>
        Go
      </button>
      <div
        style={{
          width: "50%",
          borderRadius: "10px",
          boxShadow: "0 0 5px rgba(1,1,1,0.5)",
          height: "120px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {error && (
          <>
            <h3>{error}</h3>
            <button onClick={fixHandler}>Fix it</button>
          </>
        )}
        {isBeingFixed && <h3>Car is being fixed...</h3>}
      </div>
    </>
  );
};

export default Screen;
