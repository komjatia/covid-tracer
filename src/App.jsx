import React, { useState, useEffect } from "react";
import axios from "axios";
//import components
import SumSide from "./components/SumSide";

//import styles
import GlobalStyle from "./GlobalStyle";

function App() {
  const [countries, setCountries] = useState();
  useEffect(async () => {
    const country = await axios.get("https://api.covid19api.com/summary");
    setCountries(country.data.Countries);
    console.log(country);
  }, []);
  return (
    <div className='App'>
      <GlobalStyle />
      {countries && <SumSide state={countries} />}
    </div>
  );
}

export default App;
