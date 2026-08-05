"use client";

import React from "react";
import { StyledFooter, Text } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Text>This Website is made with ❤️ By Hamza Sajid using</Text>
      <Text>
        <img src="/images/skills/react.svg" alt="react" />
        <img src="/images/skills/gatsby.svg" alt="gatsby" />
        <img src="/images/skills/vercel.svg" alt="vercel" />
      </Text>
      <Text>
        <span>&#169;</span> 7amza {new Date().getFullYear()}
      </Text>
    </StyledFooter>
  );
};

export default Footer;
