"use client";

import React from "react";
import { StyledSection } from "./styles";

type SectionProps = {
  children: React.ReactNode;
  sectionId?: string;
  primary?: boolean;
};

const Section = ({ children, sectionId, primary }: SectionProps) => {
  return (
    <StyledSection id={sectionId} $primary={primary}>
      {children}
    </StyledSection>
  );
};

export default Section;
