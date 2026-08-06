import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 900px;
  padding-left: 2rem;

  /* The vertical line running through the timeline */
  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 5px;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primaryColor} 0%,
      rgba(4, 232, 185, 0.1) 100%
    );
  }
`;
