import styled from "styled-components";

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 6px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 15px 13px -7px #000000,
      0px 0px 6px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 15px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
    -webkit-transform: translateY(-2%) scale(1.02);
    transform: translateY(-2%) scale(1.02);
  }
`;

export const CardMedia = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const ProjectName = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.15rem;
  font-weight: 600;
`;

export const Actions = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  svg:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  /* Pin tags to the bottom so cards of differing text length stay aligned */
  margin-top: auto;
`;

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 0.75rem;
  border-radius: 14px;
  opacity: 0.7;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.primaryColor};
  font-size: 0.8rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
