import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --div-margin: 30px; 
  --btn-margin: 20px; 
  --div-padding: 10px; 
}
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}

body {
  
  font-family: 'Open Sans', sans-serif;
  background-color: black;
}
#modal-root {
  position: relative;
}

`;
