import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 2.5rem 2rem;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.primaryColor}1a;
  background-image: linear-gradient(180deg, #1a1f3d 0%, #12142f 100%);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  /* Accent bar that slides in along the top edge on hover. */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primaryColor},
      transparent
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primaryColor}59;
    box-shadow: 0px 18px 30px -12px #000000;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const Index = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1;
  color: ${({ theme }) => theme.secondaryColor};
  opacity: 0.06;
`;

export const IconChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 14px;
  margin-bottom: 1.75rem;
  background: ${({ theme }) => theme.primaryColor}14;
  border: 1px solid ${({ theme }) => theme.primaryColor}26;

  img {
    height: 34px;
    width: 34px;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  line-height: 1.55;
  margin-bottom: 1.5rem;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: auto;
  width: 100%;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.textColor};
  font-size: 0.92rem;

  /* Teal check-dot marker. */
  &::before {
    content: "";
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 8px ${({ theme }) => theme.primaryColor}80;
  }
`;
