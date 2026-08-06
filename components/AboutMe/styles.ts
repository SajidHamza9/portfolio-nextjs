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
  margin-bottom: 1.5rem;
`;

export const Certifications = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const CertBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid rgba(4, 232, 185, 0.4);
  background-color: rgba(4, 232, 185, 0.06);

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }
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

export const PhotoFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;

  /* Offset outlined frame sitting behind the photo (classic portrait framing) */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 12px;
    transform: translate(18px, 18px);
    opacity: 0.55;
    transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
    z-index: 0;
  }

  /* Decorative corner brackets */
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    border-top: 3px solid ${({ theme }) => theme.primaryColor};
    border-left: 3px solid ${({ theme }) => theme.primaryColor};
    border-top-left-radius: 6px;
    z-index: 2;
  }

  &:hover::before {
    transform: translate(10px, 10px);
    opacity: 0.8;
  }
`;

export const Photo = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(4, 232, 185, 0.5);
  box-shadow: 0 0 25px rgba(4, 232, 185, 0.15),
    0px 10px 13px -7px #000000;
  transition: all 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(35%);
    transition: filter 0.4s ease-in-out;
  }

  /* Subtle bottom-to-top gradient for depth + a top color wash */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(4, 232, 185, 0.12) 0%,
      rgba(17, 18, 51, 0) 35%,
      rgba(17, 18, 51, 0.55) 100%
    );
    pointer-events: none;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 35px rgba(4, 232, 185, 0.3),
      0px 15px 13px -7px #000000;
    transform: translateY(-1%) scale(1.01);
  }

  &:hover img {
    filter: grayscale(0%);
  }

  &:hover::after {
    opacity: 0.4;
  }
`;

export const SimpleTitle = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const contactRow = `
  font-size: 1.07rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.textColor};
  ${contactRow}
  svg {
    color: ${({ theme }) => theme.primaryColor};
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  width: fit-content;
  ${contactRow}
  transition: color 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.primaryColor};
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  display: inline-flex;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    transform: translateY(-2px);
  }
`;
