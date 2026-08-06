import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-image: linear-gradient(180deg, #202646 0%, #111233 100%);
  border-top: 1px solid ${({ theme }) => theme.primaryColor}26;
  padding: 3rem 5rem 1.5rem;

  @media (max-width: 860px) {
    padding: 2.5rem 1.5rem 1.5rem;
  }
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const Logo = styled.img`
  width: 2.75rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.span`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.2rem;
  font-weight: 700;
`;

export const BrandTagline = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
  max-width: 420px;

  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  display: inline-flex;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    transform: translateY(-2px);
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.primaryColor}1a;
  margin: 2rem 0 1.5rem;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const MadeWith = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;
  img {
    height: 20px;
    width: 20px;
  }
`;

export const BackToTop = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor}66;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.bgColor};
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 3px;
  }
`;
