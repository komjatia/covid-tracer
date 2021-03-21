import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fcfcfc;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

export default Style;
