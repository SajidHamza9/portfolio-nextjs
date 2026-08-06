"use client";

import React from "react";
import { experiences } from "@/content/experience";
import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import ExperienceItem from "./ExperienceItem";
import { Timeline } from "./styles";

const Experience = () => {
  return (
    <Section sectionId="experience">
      <Container $maxWidth="lg">
        <Title>Experience</Title>
        <Timeline>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.role}`}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              {...experience}
            />
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Experience;
