"use client";

import React from "react";
import { projects } from "@/content/projects";
import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import Project from "./Project";

const Projects = () => {
  return (
    <Section sectionId="projects" primary>
      <Container $maxWidth="lg">
        <Title>Projects</Title>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Container>
    </Section>
  );
};

export default Projects;
