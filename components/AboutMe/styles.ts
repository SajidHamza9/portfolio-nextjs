import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const Col = styled.div`
  flex: 1 1 100%;
  @media (min-width: 960px) {
    flex: 1 1 45%;
    max-width: 50%;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SimpleTitle = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.primaryColor};
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }
`;
