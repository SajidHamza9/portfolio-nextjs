"use client";

import React from "react";
import { StyledTitle } from "./styles";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledTitle>
      <h1>{children}</h1>
    </StyledTitle>
  );
};

export default Title;
