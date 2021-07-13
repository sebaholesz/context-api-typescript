import React, { FC } from "react";

import Engine from "./Engine";
import Dashboard from "./Dashboard"

const Car:FC = () => {
  return (
    <>
      <Dashboard/>
      <Engine/>
    </>
  );
};

export default Car;
