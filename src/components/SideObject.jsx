import React from "react";

import styled from "styled-components";

//import Data

export default function SideObject({ f }) {
  return (
    <StyledObject>
      <StyledCountryConatiner>
        <p>{f.country}</p>
      </StyledCountryConatiner>
      <StyledCaseConatiner>
        <p>{f.stats.confirmed}</p>
      </StyledCaseConatiner>
      <StyledCaseConatiner>
        <p>{f.stats.deaths}</p>
      </StyledCaseConatiner>
      <StyledCaseConatiner>
        <p>{f.stats.recovered}</p>
      </StyledCaseConatiner>
    </StyledObject>
  );
}

const StyledObject = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  color: #424242;
  text-align: center;
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba(165, 165, 165, 0.4);
    cursor: pointer;
  }
`;
const StyledCountryConatiner = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;

  p {
    padding-left: 3rem;
  }
  img {
    width: 3.5rem;
  }
`;
const StyledCaseConatiner = styled.div`
  width: 20vw;
`;
