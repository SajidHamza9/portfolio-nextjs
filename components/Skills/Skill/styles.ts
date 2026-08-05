import styled from "styled-components";

export const Card = styled.div`
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
  height: 120px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 400px) {
    height: 100px;
  }

  img {
    width: 60px;
    @media (max-width: 400px) {
      width: 40px;
    }
  }
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 6px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
`;

export const Name = styled.h6`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
