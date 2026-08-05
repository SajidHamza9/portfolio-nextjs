import styled from "styled-components";

export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 6px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
  transition: all 0.3s ease-in-out;
  &:hover {
    -webkit-box-shadow: 0px 15px 13px -7px #000000,
      0px 0px 6px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 15px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
    -webkit-transform: translateY(-2%) scale(1.02);
    transform: translateY(-2%) scale(1.02);
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  line-height: 1.5;
  text-align: center;
`;

export const Wrapper = styled.div`
  height: 110px;
  overflow: hidden;
  margin-bottom: 2rem;
  img {
    height: 100%;
  }
`;
