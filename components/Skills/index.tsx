"use client";

import React from "react";
import { skills } from "@/content/skills";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import Card from "./Skill";
import { Grid } from "./styles";

const Skills = () => {
  return (
    <Section sectionId="skills" primary>
      <Container $maxWidth="lg">
        <Title>Skills</Title>
        <Grid>
          {skills.map((skill) => (
            <Card key={skill.title} {...skill} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skills;
