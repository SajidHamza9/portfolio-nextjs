"use client";

import React from "react";
import { StyledTitle } from "./styles";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledTitle>
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default Title;
