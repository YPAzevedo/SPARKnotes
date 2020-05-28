import React from "react";
import ColumnsContainer from "components/ColumnsContainer";
import Header from "components/Header";
import { ColumnsProvider } from "context/ColumnsProvider";
import GlobalStyle from "styles/global";

function App() {
  return (
    <>
      <ColumnsProvider>
        <GlobalStyle />
        <Header />
        <ColumnsContainer />
      </ColumnsProvider>
    </>
  );
}

export default App;
