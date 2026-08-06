import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  cursor: pointer;
  padding: 0.5rem 1.1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  color: ${({ theme, $active }) =>
    $active ? theme.bgColor : theme.primaryColor};
  background-color: ${({ theme, $active }) =>
    $active ? theme.primaryColor : "transparent"};
  border: 1px solid ${({ theme }) => theme.primaryColor};

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.primaryColor : "rgba(4, 232, 185, 0.12)"};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Empty = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  padding: 2rem 0;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

export const PageButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${({ theme }) => theme.primaryColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  font-variant-numeric: tabular-nums;
  min-width: 3rem;
  text-align: center;
`;
