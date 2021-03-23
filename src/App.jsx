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
  const [vaccinesC, setVaccinesC] = useState();
  const [vaccines, setVaccines] = useState();
  const [allPopulation, setAllPopulation] = useState();
  const [lastDays, setLastDays] = useState("30");
  const [allHistory, setAllHistory] = useState();
  const [show, setShow] = useState(false);
  const [showG, setShowG] = useState(true);
  const [showS, setShowS] = useState(false);
  const [R, setR] = useState(false);
  const [countriesVerC, setCountriesVerC] = useState();
  useEffect(async () => {
    const country = await axios.get("https://api.covid19api.com/summary");
    const vaccineC = await axios.get(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"
    );
    const vaccine = await axios.get(
      "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1"
    );
    const population = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    const history = await axios.get(
      `https://disease.sh/v3/covid-19/historical?lastdays${lastDays}`
    );
    setAllHistory(history.data);
    setCountries(country.data.Countries);
    setGlobal(country.data.Global);
    setVaccinesC(vaccineC.data);
    setVaccines(vaccine.data);
    setAllPopulation(population.data);
  }, []);
  useEffect(() => {
    if (countries) {
      const copyOfCountry = [...countries];
      const filteredCountry = copyOfCountry.filter((t) =>
        t.Country.includes(vs)
      );
      setCountriesVer(filteredCountry[0]);
      setCountriesVerC(filteredCountry[0].Country);
      setShow(true);
      setShowG(false);
      setShowS(false);
      setR(!R);
    }
  }, [vs]);
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      {vaccinesC && vaccines && (
        <VerticalSlide
          filteredData={countriesVer}
          population={allPopulation}
          vaccines={vaccines}
          vaccinesC={vaccinesC}
          data={countriesVer}
          search={countries}
          defaults={global}
          show={show}
          setShow={setShow}
          showG={showG}
          setShowG={setShowG}
          showS={showS}
          setShowS={setShowS}
          dC={countriesVerC}
          R={R}
        />
      )}
      {countries && (
        <SumSide
          state={countries}
          setVs={setVs}
          show={show}
          setShow={setShow}
          showG={showG}
        />
      )}
    </div>
  );
}

export default App;
