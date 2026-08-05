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
              href="https://drive.google.com/file/d/1ZTFsE8EYdb2e8eE9KSAZF_Qfn1PwA_0t/view?usp=sharing"
              target="_blank"
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
