"use client";

import React from "react";
import type { Service as ServiceType } from "@/types/content";
import {
  Card,
  Index,
  IconChip,
  Title,
  Description,
  FeatureList,
  Feature,
} from "./styles";

type ServiceProps = ServiceType & { index: number };

const Service = ({ image, description, title, features, index }: ServiceProps) => {
  return (
    <Card>
      <Index>{String(index + 1).padStart(2, "0")}</Index>
      <IconChip>
        <img src={image} alt={title} />
      </IconChip>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FeatureList>
        {features.map((feature) => (
          <Feature key={feature}>{feature}</Feature>
        ))}
      </FeatureList>
    </Card>
  );
};

export default Service;
