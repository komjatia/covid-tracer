import React from "react";

import styled from "styled-components";

//import Data

export default function SideVaccine({ f }) {
  return (
    <StyledTableRow>
      <StyledTableData>{Object.values(f)}</StyledTableData>
    </StyledTableRow>
  );
}
const StyledTableRow = styled.tr``;
const StyledTableData = styled.td`
  padding: 0.5rem;
  height: 3rem;
`;
