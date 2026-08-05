import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 16px;
}
body {
    background-color: ${({ theme }) => theme.bgColor};
    font-family: sans-serif;
    &::-webkit-scrollbar {
    width: 4px;
  }


  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    margin: 8px;
  }
}
@media (max-width:768px) {
  html {
    font-size: 14px;
  }
}
`;
