"use client";

import React from "react";
import scrollTo from "@/lib/scrollTo";
import {
  StyledAvatar,
  Section,
  StyledContainer,
  Text,
  BtnRow,
  ContainedButton,
  OutlinedButton,
} from "./styles";

const Intro = () => {
  return (
    <Section id="home">
      <StyledContainer $maxWidth="md">
        <StyledAvatar data-aos="fade-down" alt="image" src="/images/me3.jpeg" />
        <Text data-aos="zoom-in">
          Hello&#128075;, I&apos;m <span>HAMZA SAJID</span>. <br />
          I&apos;m a Full Stack Developer.
        </Text>
        <BtnRow>
          <div>
            <OutlinedButton
              data-aos="fade-right"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              view resume
            </OutlinedButton>
          </div>
          <div>
            <ContainedButton
              onClick={() => scrollTo("#contact")}
              data-aos="fade-left"
            >
              get in touch
            </ContainedButton>
          </div>
        </BtnRow>
      </StyledContainer>
    </Section>
  );
};

export default Intro;
