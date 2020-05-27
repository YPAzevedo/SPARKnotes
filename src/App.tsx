import React from "react";

import ColumnsContainer from "components/ColumnsContainer";

import { ColumnsProvider } from "context/ColumnsProvider";

import GlobalStyle from "styles/global";

function App() {
  return (
    <>
      <ColumnsProvider>
        <GlobalStyle />
        <ColumnsContainer />
      </ColumnsProvider>
    </>
  );
}

export default App;
