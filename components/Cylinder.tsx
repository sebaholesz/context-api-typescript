import React, { FC, useContext } from "react";

import { CarContext } from '../context/CarContext'

const Cylinder:FC = () => {
  const isEngineOn = useContext(CarContext).isEngineOn;
  
  return (
    <div
      style={{
        borderRadius: "100%",
        width: "80px",
        height: "80px",
        margin: "30px",
        backgroundColor: isEngineOn ? "green" : "red",
      }}
    ></div>
  );
};

export default Cylinder;
