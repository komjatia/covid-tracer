import React, { useState, useEffect } from "react";
import axios from "axios";
//import components
import SumSide from "./components/SumSide";
import Header from "./components/Header";
import VerticalSlide from "./components/VerticalSlide";
//import styles
import GlobalStyle from "./GlobalStyle";

function App() {
  const [countries, setCountries] = useState();
  const [global, setGlobal] = useState();
  const [vs, setVs] = useState();
  const [countriesVer, setCountriesVer] = useState();
  useEffect(async () => {
    const country = await axios.get("https://api.covid19api.com/summary");
    setCountries(country.data.Countries);
    setGlobal(country.data.Global);
  }, []);
  useEffect(() => {
    if (countries) {
      const copyOfCountry = [...countries];
      const filteredCountry = copyOfCountry.filter((t) =>
        t.Country.includes(vs)
      );
      setCountriesVer(filteredCountry[0]);
    }
  }, [vs]);
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      {global && <VerticalSlide data={countriesVer} defaults={global} />}
      {countries && <SumSide state={countries} setVs={setVs} />}
    </div>
  );
}

export default App;
