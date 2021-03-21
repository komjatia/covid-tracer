import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SideOject from "./SideObject";
import { findDOMNode } from "react-dom";

export default function SumSide() {
  const [countries, setCountries] = useState();
  const [sortByConfirmed, setSortByConfirmed] = useState();
  const [sortByConfirmedC, setSortByConfirmedC] = useState(true);
  useEffect(async () => {
    const country = await axios.get("https://disease.sh/v3/covid-19/jhucsse");
    setCountries(country.data);
  }, []);

  const sortByConfirmedF = () => {
    const d = sortByConfirmedC;
    console.log(d);
    if (countries) {
      if (d) {
        const t = countries
          .filter((t) => t.stats.confirmed)
          .sort((a, b) => a.stats.confirmed - b.stats.confirmed);
        setSortByConfirmed(t);
        setSortByConfirmedC(false);
      } else {
        const t = countries
          .filter((t) => t.stats.confirmed)
          .sort((a, b) => b.stats.confirmed - a.stats.confirmed);
        setSortByConfirmed(t);
        setSortByConfirmedC(true);
      }
    }
  };

  return (
    <StyledContainer>
      <div className='options'>
        <p>Country</p>
        <p onClick={sortByConfirmedF}>Confirmed</p>
        <p>Recovered</p>
        <p>Deaths</p>
      </div>

      {sortByConfirmed
        ? sortByConfirmed.map((data) => (
            <SideOject f={data} key={data.country} />
          ))
        : countries &&
          countries.map((data) => <SideOject f={data} key={data.country} />)}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  height: 85vh;
  width: 80vw;
  overflow: scroll;
  border: 2px solid rgba(209, 209, 209, 0.7);
  border-radius: 10px;
  margin: 2rem;
  background-color: rgba(209, 209, 209, 0.7);

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    text-align: center;
    p {
      width: 22vw;
    }
  }
`;
