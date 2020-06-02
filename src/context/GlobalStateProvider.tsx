import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

import { stateReducer } from "./reducer";

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
  columns: ColumnData[];
  tasks: TaskData[] | never[];
}

const GlobalStateContext = createContext<GlobalStateProviderData>(
  {} as GlobalStateProviderData
);

const GlobalDispatchContext = createContext<any>(null);

export const GlobalStateProvider: React.FC = ({ children }) => {
  const reducer = useCallback(stateReducer, []);

  const [state, dispatch] = useReducer(reducer, {
    columns: COLUMNS,
    tasks: [],
  });

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default function useGlobalState() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  console.log({
    state,
    dispatch,
  });

  return {
    state,
    dispatch,
  };
}
