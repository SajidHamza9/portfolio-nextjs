import styled from "styled-components";

export const StyledSection = styled.section<{ $primary?: boolean }>`
  position: relative;
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.bgColor : theme.bgSecondary};
  padding-bottom: 4rem;
  overflow: hidden;
`;
