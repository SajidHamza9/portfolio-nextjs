"use client";

import { FaArrowDown } from "react-icons/fa";
import scrollTo from "@/lib/scrollTo";
import {
  StyledAvatar,
  AvatarRing,
  Section,
  StyledContainer,
  Headline,
  Role,
  Tagline,
  Wave,
  BtnRow,
  ContainedButton,
  OutlinedButton,
  ScrollDown,
} from "./styles";

const Intro = () => {
  return (
    <Section id="home">
      <StyledContainer $maxWidth="md">
        <AvatarRing data-aos="fade-down">
          <StyledAvatar alt="Hamza Sajid" src="/images/me3.jpeg" />
        </AvatarRing>

        <Headline data-aos="zoom-in">
          Hello{" "}
          <Wave aria-label="waving hand" role="img">
            &#128075;
          </Wave>
          , I&apos;m <span>Hamza Sajid</span>
        </Headline>

        <Role data-aos="fade-up">
          I&apos;m a <span>Full Stack Developer</span>
        </Role>

        <Tagline data-aos="fade-up">
          I design and build good-looking web applications backed by a solid
          cloud infrastructure.
        </Tagline>

        <BtnRow>
          <div>
            <ContainedButton
              onClick={() => scrollTo("#contact")}
              data-aos="fade-right"
            >
              get in touch
            </ContainedButton>
          </div>
          <div>
            <OutlinedButton
              data-aos="fade-left"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              view resume
            </OutlinedButton>
          </div>
        </BtnRow>
      </StyledContainer>

      <ScrollDown
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about section"
      >
        <FaArrowDown />
      </ScrollDown>
    </Section>
  );
};

export default Intro;
