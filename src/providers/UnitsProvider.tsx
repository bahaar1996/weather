"use client";
import { UnitsContext } from "@/hooks/useUnits";
import { useState } from "react";

const UnitsProvider = ({ children }) => {
  const [tempState, setTempState] = useState("maxtemp_c");

  return (
    <UnitsContext.Provider value={{ tempState, setTempState }}>
      {children}
    </UnitsContext.Provider>
  );
};

export default UnitsProvider;
