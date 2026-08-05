import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const MediaCol = styled.div`
  flex: 1 1 100%;
  @media (min-width: 960px) {
    flex: 1 1 40%;
    max-width: 41.6667%;
  }
`;

export const ContentCol = styled.div`
  flex: 1 1 100%;
  @media (min-width: 960px) {
    flex: 1 1 55%;
    max-width: 58.3333%;
  }
`;

export const CardMedia = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 7px rgb(0 0 0 / 25%);
  }
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export const ProjectName = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0.9;
`;

export const Actions = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  svg:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  height: 32px;
  border-radius: 16px;
  opacity: 0.7;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.primaryColor};
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-size: 1rem;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
    &:not(:last-child) {
      margin-right: 0.8rem;
      padding: 0.8rem;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
