"use client";

import React from "react";
import { skills } from "@/content/skills";
import type { Skill as SkillType, SkillCategory } from "@/types/content";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import Card from "./Skill";
import { Group, GroupHeader, GroupLabel, Grid } from "./styles";

// Category order the groups render in. Skills are bucketed by their
// `category` field so the section stays fully data-driven (see content/skills).
const CATEGORY_ORDER: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "DevOps & Cloud",
  "Tools",
];

const groupByCategory = (items: SkillType[]) =>
  CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((skill) => skill.category === category),
  })).filter((group) => group.items.length > 0);

const Skills = () => {
  return (
    <Section sectionId="skills" primary>
      <Container $maxWidth="lg">
        <Title>Skills</Title>
        {groupByCategory(skills).map((group, index) => (
          <Group
            key={group.category}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <GroupHeader>
              <GroupLabel>{group.category}</GroupLabel>
            </GroupHeader>
            <Grid>
              {group.items.map((skill) => (
                <Card key={skill.title} {...skill} />
              ))}
            </Grid>
          </Group>
        ))}
      </Container>
    </Section>
  );
};

export default Skills;
