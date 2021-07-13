import { createContext, FC, useState } from "react";

interface ICarContext {
  oilLevel: number;
  isEngineOn: boolean;
  error: null | string;
  isBeingFixed: boolean;
  actions: {
    start: () => void;
    go: (amountOfUsedOil: number) => void;
    stop: () => void;
    notifyError: () => void;
    fix: () => void;
  };
}

const initialCarState = {
  oilLevel: 100,
  isEngineOn: false,
  error: null,
  isBeingFixed: false,
  actions: {
    start: () => {alert('start')},
    go: (amountOfUsedOil: number) => {},
    stop: () => {},
    notifyError: () => {},
    fix: () => {},
  },
};

export const CarContext = createContext<ICarContext>(initialCarState);

const CarContextProvider: FC = ({ children }) => {
  const [carState, setCarState] = useState<ICarContext>({
    oilLevel: 100,
    isEngineOn: false,
    error: null,
    isBeingFixed: false,
    actions: {
      start: () => {
        setCarState((state) => {
          return { ...state, isEngineOn: true };
        });
      },
      go: (amountOfUsedOil: number) => {
        setCarState((state) => {
          const newOilLevel = (state.oilLevel -= amountOfUsedOil);
          return { ...state, oilLevel: Math.max(newOilLevel, 0) };
        });
      },
      stop: () => {
        setCarState((state) => {
          return { ...state, isEngineOn: false };
        });
      },
      notifyError: () => {
        setCarState((state) => {
          return {
            ...state,
            isEngineOn: false,
            error: "something is wrong with the oil pump",
          };
        });
      },
      fix: () => {
        setCarState((state) => {
          return {
            ...state,
            error: null,
            isBeingFixed: true,
          };
        });

        setTimeout(() => {
          setCarState((state) => {
            return {
              ...state,
              isBeingFixed: false,
              isEngineOn: true,
              oilLevel: 100,
            };
          });
        }, 3000);
      },
    },
  });

  return (
    <CarContext.Provider value={carState}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
