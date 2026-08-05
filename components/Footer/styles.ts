import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
  img {
    height: 24px;
    width: 24px;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
