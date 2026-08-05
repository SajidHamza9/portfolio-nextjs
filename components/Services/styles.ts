import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
