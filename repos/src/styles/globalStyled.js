import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  user-select: none;
}

html,body, #root {
    min-height: 100%;
}

body{
    background-color: #0d2636;
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
   font-family: Arial, Helvetica, sans-serif;
    width: 100%;
   input, button{
       color: #222;
    }

    button{
        cursor: pointer;
    }
}
`;
