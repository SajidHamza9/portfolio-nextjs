"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import { darkMode } from "@/styles/theme";
import AosInit from "@/components/AosInit";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
      <AosInit />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
