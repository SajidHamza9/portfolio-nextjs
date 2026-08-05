import styled from "styled-components";

export const StyledSection = styled.section<{ $primary?: boolean }>`
  position: relative;
  /* Transparent so the fixed ParticlesBackground layer shows through.
     Both theme bg colors equal the body background, so this is a no-op
     visually apart from revealing the constellation behind the content. */
  background-color: transparent;
  padding-bottom: 4rem;
  overflow: hidden;
`;
