import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryColor}0d;
  border: 1px solid ${({ theme }) => theme.primaryColor}1f;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.primaryColor}14;
    border-color: ${({ theme }) => theme.primaryColor}66;
    box-shadow: 0 12px 24px -12px ${({ theme }) => theme.primaryColor}59;
  }

  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.25s ease, background-color 0.25s ease;
    &:hover {
      transform: none;
    }
    &:hover img {
      transform: none;
    }
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.2;
`;
