import React from "react";
import styled from "styled-components";
import Logo from "../img/virus.svg";

export default function Header() {
  return (
    <StyledHeaderCointainer>
      <StyledHeader>
        <div className='logo'>
          <img src={Logo} alt='covid' />
          <p>Covid-19 Tracker</p>
        </div>
        <div className='links'>
          <a href='/'>infection</a>
          <a href='/Vaccinations'>Vaccinations</a>
        </div>
      </StyledHeader>
    </StyledHeaderCointainer>
  );
}

const StyledHeaderCointainer = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.37);
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 5rem;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 23%;
    font-size: 1.3rem;
    img {
      width: 18%;
    }
  }
  .links {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 26%;
    a {
      text-decoration: none;
      color: #424242;
      font-size: 0.8rem;
      padding: 0.5rem 1.6rem;
      border-radius: 15px;
      background-color: rgba(255, 255, 255, 0.582);
      transition: all 0.2s ease;
      &:hover {
        background-color: rgba(255, 255, 255, 0.884);
        box-shadow: 2px 2px 5px rgba(71, 71, 71, 0.767);
      }
    }
  }
`;
