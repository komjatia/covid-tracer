import axios from "axios";

export const allCountry = axios.get("https://disease.sh/v3/covid-19/countries");

export const selectedCountry = (d) => {
  const data = axios.get(
    `https://disease.sh/v3/covid-19/jhucsse/counties/${d}`
  );
};

//fertoyottek szama miota van a covid osszes orszag
export const sinceCovid = (time) => {
  axios.get(`https://disease.sh/v3/covid-19/historical?lastdays=${time}`);
};

export const vaccinaCoverage = (time) => {
  axios.get(
    `https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=${time}`
  );
};
