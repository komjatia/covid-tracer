import React from "react";
import styled from "styled-components";

export default function VerticalSlide({ data, defaults }) {
  return (
    <StyledVerticalSlideContainer>
      <StyledVerticalSlide>
        <div className='option'></div>
        <div className='box-container'>
          <div className='box box-confirmed'>
            <div className='numbers'>
              {data ? (
                <p>{data.TotalConfirmed}</p>
              ) : (
                <p>{defaults.TotalConfirmed}</p>
              )}
            </div>
            <div className='title'>
              <p>Confirmed</p>
            </div>
          </div>
          <div className='box box-recovered'>
            <div className='numbers'>
              {data ? (
                <p>{data.TotalRecovered}</p>
              ) : (
                <p>{defaults.TotalRecovered}</p>
              )}
            </div>
            <div className='title'>
              <p>recovered</p>
            </div>
          </div>
          <div className='box box-deaths'>
            <div className='numbers'>
              {data ? <p>{data.TotalDeaths}</p> : <p>{defaults.TotalDeaths}</p>}
            </div>
            <div className='title'>
              <p>Deaths</p>
            </div>
          </div>
          <div className='box '>
            <div className='numbers'>
              <p>number</p>
            </div>
            <div className='title'>
              <p>recovered</p>
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
