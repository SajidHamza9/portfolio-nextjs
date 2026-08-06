"use client";

import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa";
import { about } from "@/content/about";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import {
  Row,
  Col,
  InfoBox,
  Text,
  Wrapper,
  PhotoFrame,
  Photo,
  SimpleTitle,
  Item,
  ContactLink,
  Certifications,
  CertBadge,
  Socials,
  SocialLink,
} from "./styles";

const AboutMe = () => {
  const { bio, email, tel, address, photo, github, linkedin, certifications } =
    about;
  return (
    <Section sectionId="about">
      <Container $maxWidth="lg">
        <Title>About Me</Title>
        <Row>
          <Col>
            <InfoBox>
              <Text dangerouslySetInnerHTML={{ __html: bio }} />

              <Certifications>
                {certifications.map((cert) => (
                  <CertBadge key={cert}>
                    <FaAws />
                    {cert}
                  </CertBadge>
                ))}
              </Certifications>

              <SimpleTitle>
                For business inquiries feel free to get in touch with me at:
              </SimpleTitle>
              <ContactLink href={`mailto:${email}`}>
                <MdEmail />
                {email}
              </ContactLink>
              <ContactLink href={`tel:+${tel}`}>
                <MdPhone />
                {`+${tel}`}
              </ContactLink>
              <Item>
                <MdLocationOn />
                {address}
              </Item>

              <Socials>
                <SocialLink
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </SocialLink>
              </Socials>
            </InfoBox>
          </Col>
          <Col>
            <Wrapper>
              <PhotoFrame>
                <Photo>
                  <img src={photo} alt="Hamza Sajid" />
                </Photo>
              </PhotoFrame>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default AboutMe;
