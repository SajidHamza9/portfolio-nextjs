import styled from "styled-components";

export const Item = styled.div`
  position: relative;
`;

export const Dot = styled.span`
  position: absolute;
  top: 1.75rem;
  left: calc(-2rem + 1px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 0 4px rgba(4, 232, 185, 0.15);
`;

export const Card = styled.div`
  padding: 1.75rem 2rem;
  border-radius: 8px;
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 6px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 15px 13px -7px #000000,
      0px 0px 6px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 15px 13px -7px #000000, 0px 0px 6px 0px rgba(0, 0, 0, 0);
    -webkit-transform: translateY(-2%) scale(1.01);
    transform: translateY(-2%) scale(1.01);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const Role = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Company = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.07rem;
  font-weight: 600;

  &::before {
    content: "@ ";
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const Badge = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid rgba(4, 232, 185, 0.4);
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;
`;

export const Location = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;

  &::before {
    content: "· ";
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  line-height: 1.5;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 0.9rem;
  border-radius: 16px;
  opacity: 0.7;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.primaryColor};
  font-size: 0.9rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;
