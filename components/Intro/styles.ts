import styled, { keyframes } from "styled-components";
import { Container } from "@/components/common/Container";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

export const Wave = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.2s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const StyledAvatar = styled.img`
  border: 3px solid ${({ theme }) => theme.primaryColor};
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

export const ContainedButton = styled.button`
  color: ${({ theme }) => theme.bgColor};
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 1rem;
  padding: 1.4rem 3rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.primaryColor};
  text-transform: uppercase;
  font-weight: bolder;
  width: 90%;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

export const OutlinedButton = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  background-color: transparent;
  font-size: 1rem;
  padding: 1.4rem 3rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  text-transform: uppercase;
  font-weight: bolder;
  width: 90%;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
`;

export const Section = styled.section`
  overflow: hidden;
  /* Transparent so the fixed ParticlesBackground shows through the hero.
     bgColor equals the body background, so this looks identical apart
     from revealing the constellation behind the content. */
  background-color: transparent;
  height: 100vh;
  position: relative;
`;

export const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
  margin-bottom: 2rem;
  @media (max-width: 550px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  > div {
    flex: 1;
    display: flex;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
