"use client";

import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { about } from "@/content/about";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import Photos from "@/components/photos";
import {
  Row,
  Col,
  InfoBox,
  Text,
  Wrapper,
  SimpleTitle,
  Item,
} from "./styles";

const AboutMe = () => {
  const { bio, email, tel, address, photos } = about;
  return (
    <Section sectionId="about">
      <Container $maxWidth="lg">
        <Title>About Me</Title>
        <Row>
          <Col>
            <InfoBox>
              <Text dangerouslySetInnerHTML={{ __html: bio }} />
              <SimpleTitle>
                For business inquiries feel free to get in touch with me at:
              </SimpleTitle>
              <Item>
                <MdEmail />
                {email}
              </Item>
              <Item>
                <MdPhone />
                {`+${tel}`}
              </Item>
              <Item>
                <MdLocationOn />
                {address}
              </Item>
            </InfoBox>
          </Col>
          <Col>
            <Wrapper>
              <Photos photos={photos} />
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default AboutMe;
