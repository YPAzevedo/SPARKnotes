import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

import { stateReducer } from './reducer'

import { COLUMNS } from "./columns";

interface ColumnData {
  id: string;
  title: string;
  taskIds: string[];
}

interface TaskData {
  id: string;
  text: string;
}

interface GlobalStateProviderData {
  state: {
    columns: ColumnData[];
    tasks: TaskData[] | never[];
  };
  dispatch: Function;
}

const GlobalStateContext = createContext<GlobalStateProviderData>(
  {} as GlobalStateProviderData
);

export const GlobalStateProvider: React.FC = ({ children }) => {

  const reducer = useCallback(stateReducer, [])

  const [state, dispatch] = useReducer(reducer, {
    columns: COLUMNS,
    tasks: [],
  });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default function useGlobalState() {
  const context = useContext(GlobalStateContext);

  return context;
}
