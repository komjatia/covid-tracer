import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #F9A4A4;
        color: #424242;
        font-family: 'Poppins', sans-serif;
    }
`;

export default Style;
