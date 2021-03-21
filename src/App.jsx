import React, { useState } from "react";

//import components
import SumSide from "./components/SumSide";

//import styles
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <SumSide />
    </div>
  );
}

export default App;
