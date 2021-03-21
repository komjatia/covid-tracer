import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SideOject from "./SideObject";
import { findDOMNode } from "react-dom";

export default function SumSide({ state }) {
  const [countries, setCountries] = useState(state);
  const [sortByConfirmed, setSortByConfirmed] = useState();
  const [sortByRecovered, setSortByRecovered] = useState();
  const [sortByDeaths, setSortByDeaths] = useState();
  const [ShowCountry, setShowCountry] = useState(true);
  const [sortType, setSortType] = useState("country");
  const [click, setclick] = useState(false);

  const sortByConfirmedF = () => {
    const d = click;
    setShowCountry(false);
    setSortType("confirmed");
    if (countries) {
      if (d) {
        const t = countries
          .filter((t) => t.TotalConfirmed)
          .sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
        setSortByConfirmed(t);
        setclick(false);
      } else {
        const t = countries
          .filter((t) => t.TotalConfirmed)
          .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        setSortByConfirmed(t);
        setclick(true);
      }
    }
  };

  const sortByRecoveredF = () => {
    const d = click;
    setShowCountry(false);
    setSortType("recovered");
    if (countries) {
      if (d) {
        const t = countries
          .filter((t) => t.TotalRecovered)
          .sort((a, b) => a.TotalRecovered - b.TotalRecovered);
        setSortByRecovered(t);
        setclick(false);
      } else {
        const t = countries
          .filter((t) => t.TotalRecovered)
          .sort((a, b) => b.TotalRecovered - a.TotalRecovered);
        setSortByRecovered(t);
        setclick(true);
      }
    }
  };

  const sortByDeathsF = () => {
    const d = click;
    setShowCountry(false);
    setSortType("deaths");
    if (countries) {
      if (d) {
        const t = countries
          .filter((t) => t.TotalDeaths)
          .sort((a, b) => a.TotalDeaths - b.TotalDeaths);
        setSortByDeaths(t);
        setclick(false);
      } else {
        const t = countries
          .filter((t) => t.TotalDeaths)
          .sort((a, b) => b.TotalDeaths - a.TotalDeaths);
        setSortByDeaths(t);
        setclick(true);
      }
    }
  };

  return (
    <StyledContainer>
      <div className='options'>
        <p>Country</p>
        <p onClick={sortByConfirmedF}>Confirmed</p>
        <p onClick={sortByRecoveredF}>Recovered</p>
        <p onClick={sortByDeathsF}>Deaths</p>
      </div>
      {ShowCountry
        ? countries.map((data) => <SideOject f={data} key={data.ID} />)
        : null}
      {sortType === "confirmed"
        ? sortByConfirmed.map((data) => <SideOject f={data} key={data.ID} />)
        : null}
      {sortType === "deaths"
        ? sortByDeaths.map((data) => <SideOject f={data} key={data.ID} />)
        : null}
      {sortType === "recovered"
        ? sortByRecovered.map((data) => <SideOject f={data} key={data.ID} />)
        : null}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  height: 85vh;
  width: 80vw;
  overflow: scroll;
  border-radius: 10px;
  margin: 2rem;
  background-color: rgba(209, 209, 209, 0.7);

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    text-align: center;
    background-color: rgb(255, 255, 255);
    p {
      width: 22vw;
      cursor: pointer;
    }
  }
`;
