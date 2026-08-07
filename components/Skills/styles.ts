import styled from "styled-components";

export const Group = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  /* Accent line that trails off after the category label. */
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primaryColor}40,
      transparent
    );
  }
`;

export const GroupLabel = styled.h3`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
