"use client";

import React from "react";
import { services } from "@/content/services";
import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import Service from "./Service";
import { Grid } from "./styles";

const Services = () => {
  return (
    <Section sectionId="services">
      <Container $maxWidth="lg">
        <Title>Services</Title>
        <Grid>
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
