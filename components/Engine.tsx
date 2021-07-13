import React, { FC, useContext, useEffect } from "react";

import { CarContext } from "../context/CarContext";
import Cylinder from "./Cylinder";
import OilPump from "./OilPump";

const Engine: FC = () => {
  const oilLevel = useContext(CarContext).oilLevel;
  const carActions = useContext(CarContext).actions;

  useEffect(() => {
    if (oilLevel === 0) carActions.notifyError();
  }, [oilLevel, carActions]);

  return (
    <>
      <Cylinder />
      <OilPump />
    </>
  );
};

export default Engine;
