"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa";
import scrollTo from "@/lib/scrollTo";
import { about } from "@/content/about";
import {
  StyledFooter,
  Inner,
  TopBar,
  Brand,
  Logo,
  BrandText,
  BrandName,
  BrandTagline,
  FooterNav,
  NavLink,
  Socials,
  SocialLink,
  Divider,
  BottomBar,
  Copyright,
  MadeWith,
  BackToTop,
} from "./styles";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <StyledFooter>
      <Inner>
        <TopBar>
          <Brand>
            <Logo src="/images/logo.svg" alt="logo" onClick={scrollToTop} />
            <BrandText>
              <BrandName>Hamza Sajid</BrandName>
              <BrandTagline>Full Stack Developer</BrandTagline>
            </BrandText>
          </Brand>

          <FooterNav aria-label="Footer">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.id} onClick={() => scrollTo(`#${item.id}`)}>
                {item.label}
              </NavLink>
            ))}
          </FooterNav>

          <Socials>
            <SocialLink
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/sajidhaamza/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink href={`mailto:${about.email}`} aria-label="Send an email">
              <FaEnvelope />
            </SocialLink>
          </Socials>
        </TopBar>

        <Divider />

        <BottomBar>
          <Copyright>
            <span>&#169;</span> {new Date().getFullYear()} Hamza Sajid. All
            rights reserved.
          </Copyright>

          <MadeWith>
            Built with
            <img src="/images/skills/react.svg" alt="React" />
            <img src="/images/nextjs2.svg" alt="Next.js" />
            <img src="/images/skills/vercel.svg" alt="Vercel" />
          </MadeWith>

          <BackToTop onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </BackToTop>
        </BottomBar>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
