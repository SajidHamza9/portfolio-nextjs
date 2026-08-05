import styled from "styled-components";

/**
 * Plain styled replacement for MUI's <Container maxWidth="md|lg">.
 * Centered, responsive horizontal padding, capped max-width.
 */
export const Container = styled.div<{ $maxWidth?: "md" | "lg" }>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: ${({ $maxWidth }) => ($maxWidth === "md" ? "960px" : "1280px")};

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
