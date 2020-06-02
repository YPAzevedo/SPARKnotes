import React from "react";
import ColumnsContainer from "components/ColumnsContainer";
import Header from "components/Header";
import { GlobalStateProvider } from "context/GlobalStateProvider";
import GlobalStyle from "styles/global";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <GlobalStyle />
        <Header />
        <ColumnsContainer />
      </GlobalStateProvider>
    </>
  );
}

export default App;
