import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimation from "react-select/animated";
export default function VerticalSlide({
  data,
  defaults,
  search,
  vaccines,
  vaccinesC,
  population,
  filteredData,
  show,
  setShow,
  showG,
  setShowG,
  showS,
  setShowS,
  R,
  dC,
}) {
  const [searchItems, setSearchItems] = useState();
  const [globalData, setGlobalData] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCountryVaccines, setSelectedCountryVaccines] = useState();
  const [selectedCountryVaccinesP, setSelectedCountryVaccinesP] = useState();
  const [selectedCountry1, setSelectedCountry1] = useState();
  const [Allpopulation, setAllPopulation] = useState();
  const [showSelected, setShowSelected] = useState();
  useEffect(() => {
    if (search) {
      const newSearchItems = [];
      search.forEach((el) => {
        newSearchItems.push({
          value: el.Country,
          label: el.Country,
        });
      });
      setSearchItems(newSearchItems);
    }
  }, []);
  useEffect(async () => {
    if (selectedCountry1) {
      const searchedCounrty = await search.filter((t) =>
        t.Country.includes(selectedCountry1.value)
      );
      const sVC = await vaccinesC.filter((t) =>
        t.country.includes(selectedCountry1.value)
      );
      const searchedCounrtyPopulation = await population.filter((t) =>
        t.country.includes(selectedCountry1.value)
      );
      setAllPopulation(searchedCounrtyPopulation);
      setSelectedCountryVaccines(sVC);
      setSelectedCountry(searchedCounrty);
      console.log(selectedCountryVaccines);
      if (setSelectedCountryVaccines) {
        if (selectedCountryVaccines.length !== 0) {
          const f = () => {
            const finalNum =
              Object.values(selectedCountryVaccines[0].timeline)[0] /
              Allpopulation[0].population;
            setSelectedCountryVaccinesP(
              `${parseFloat((finalNum * 100).toFixed(2))}%`
            );
          };
          f();
        } else {
          setSelectedCountryVaccinesP(`No Data`);
        }
      } else {
        return;
      }
      setShowS(true);
      setShow(false);
      setShowG(false);
    }
  }, [selectedCountry1]);
  useEffect(async () => {
    if (show) {
      const sVC = vaccinesC.filter((t) => t.country.includes(dC));
      const searchedCounrtyPopulation = await population.filter((t) =>
        t.country.includes(dC)
      );
      setAllPopulation(searchedCounrtyPopulation);
      setSelectedCountryVaccines(sVC);
      console.log(selectedCountryVaccines);
      console.log(sVC);
      if (sVC.length !== 0) {
        const f = () => {
          const finalNum =
            Object.values(sVC[0].timeline)[0] / Allpopulation[0].population;
          setSelectedCountryVaccinesP(
            `${parseFloat((finalNum * 100).toFixed(2))}%`
          );
        };
        f();
      } else {
        setSelectedCountryVaccinesP(`No Data`);
      }
    }
  }, [R]);
  return (
    <StyledVerticalSlideContainer>
      <StyledVerticalSlide>
        {search && (
          <div className='option'>
            <Select
              components={makeAnimation()}
              onChange={setSelectedCountry1}
              options={searchItems}
              isSearchable={true}
              placeholder={dC ? dC : "Global"}
            />
          </div>
        )}
        <div className='box-container'>
          <div className='box box-confirmed'>
            <div className='numbers'>
              {showS ? (
                setSelectedCountry ? (
                  <p>{selectedCountry[0].TotalConfirmed}</p>
                ) : null
              ) : null}
              {show ? <p>{filteredData.TotalConfirmed}</p> : null}
              {showG ? <p>{defaults.TotalConfirmed}</p> : null}
            </div>
            <div className='title'>
              <p>Confirmed</p>
            </div>
          </div>
          <div className='box box-recovered'>
            <div className='numbers'>
              {showS ? <p>{selectedCountry[0].TotalRecovered}</p> : null}
              {show ? <p>{filteredData.TotalRecovered}</p> : null}
              {showG ? <p>{defaults.TotalRecovered}</p> : null}
            </div>
            <div className='title'>
              <p>recovered</p>
            </div>
          </div>
          <div className='box box-deaths'>
            <div className='numbers'>
              {showS ? <p>{selectedCountry[0].TotalDeaths}</p> : null}
              {show ? <p>{filteredData.TotalDeaths}</p> : null}
              {showG ? <p>{defaults.TotalDeaths}</p> : null}
            </div>
            <div className='title'>
              <p>Deaths</p>
            </div>
          </div>
          <div className='box '>
            <div className='numbers'>
              {showS ? <p>{selectedCountryVaccinesP}</p> : null}
              {show ? <p>{selectedCountryVaccinesP}</p> : null}
              {showG ? <p>{Object.values(vaccines)[0]}</p> : null}
            </div>
            <div className='title'>
              <p>Vaccinations</p>
            </div>
          </div>
        </div>
      </StyledVerticalSlide>
    </StyledVerticalSlideContainer>
  );
}
const StyledVerticalSlideContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 15vh;
`;

const StyledVerticalSlide = styled.div`
  width: 70% !important;
  height: 100%;
  margin: 4rem auto 2rem auto;
  background: rgba(255, 255, 255, 0.521);
  box-shadow: 0 8px 32px 0 rgba(245, 197, 197, 0.747);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .option {
    width: 20%;
  }
  .box-container {
    width: 70%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 22%;
    background: rgba(255, 255, 255, 0.651);
    box-shadow: 0 8px 32px 0 rgba(250, 166, 166, 0.37);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 10px;
    .numbers {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75%;
    }
    .title {
      text-align: center;
      text-transform: uppercase;
      font-size: 0.9rem;
      width: 100% !important;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: 10px;
      padding: 0.2rem 0 0.1rem 0;
    }
  }
  .box-confirmed {
    background: rgba(247, 156, 156, 0.363);
    box-shadow: 0 8px 32px 0 rgba(252, 215, 215, 0.37);
    .title {
      background: rgba(250, 151, 151, 0.651);
      box-shadow: 0 8px 32px 0 rgba(252, 205, 205, 0.37);
    }
  }
  .box-recovered {
    background: rgba(4, 255, 0, 0.178);
    box-shadow: 0 8px 32px 0 rgba(252, 215, 215, 0.37);
    .title {
      background: rgba(4, 255, 0, 0.253);
      box-shadow: 0 8px 32px 0 rgba(252, 205, 205, 0.37);
    }
  }
  .box-deaths {
    background: rgba(77, 77, 77, 0.199);
    box-shadow: 0 8px 32px 0 rgba(252, 215, 215, 0.37);
    .title {
      background: rgba(77, 77, 77, 0.281);
      box-shadow: 0 8px 32px 0 rgba(252, 205, 205, 0.37);
    }
  }
`;
