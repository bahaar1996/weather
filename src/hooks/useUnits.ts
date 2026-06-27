import { createContext, useContext } from "react";

export const UnitsContext = createContext(null);

export function useUnits() {
  const context = useContext(UnitsContext);

  return context;
}
