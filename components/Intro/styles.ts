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

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

export const Wave = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.2s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const AvatarRing = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  margin-bottom: 2rem;

  /* Rotating gradient ring drawn as a masked border around the avatar. */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 4px;
    background: conic-gradient(
      from 0deg,
      ${({ theme }) => theme.primaryColor},
      transparent 55%,
      ${({ theme }) => theme.primaryColor}
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: ${spin} 6s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const StyledAvatar = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 35px ${({ theme }) => theme.primaryColor}40;

  @media (max-width: 480px) {
    width: 9rem;
    height: 9rem;
  }
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
  min-height: 100vh;
  position: relative;
`;

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 5rem;
`;

export const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.secondaryColor};
  span {
    color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

export const Role = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1.25rem;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Tagline = styled.p`
  max-width: 620px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.9;
  margin-bottom: 2.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 520px;
  margin-bottom: 2.5rem;
  > div {
    flex: 1;
    display: flex;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ScrollDown = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor}66;
  font-size: 1rem;
  animation: ${bounce} 2s ease-in-out infinite;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.bgColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-height: 700px) {
    display: none;
  }
`;
