"use client";

import React from "react";
import type { Experience as ExperienceType } from "@/types/content";
import {
  Item,
  Dot,
  Card,
  Header,
  Role,
  Company,
  Meta,
  Period,
  Badge,
  Location,
  Description,
  Tags,
  Tag,
} from "./styles";

type ExperienceItemProps = ExperienceType & {
  animation: "fade-right" | "fade-left";
};

const ExperienceItem = ({
  role,
  company,
  type,
  period,
  location,
  description,
  tags,
  animation,
}: ExperienceItemProps) => {
  return (
    <Item>
      <Dot />
      <Card data-aos={animation}>
        <Header>
          <Role>{role}</Role>
          <Company>{company}</Company>
        </Header>
        <Meta>
          <Badge>{type}</Badge>
          <Period>{period}</Period>
          <Location>{location}</Location>
        </Meta>
        <Description>{description}</Description>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Card>
    </Item>
  );
};

export default ExperienceItem;
