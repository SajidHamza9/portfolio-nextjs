"use client";

import React from "react";
import type { Service as ServiceType } from "@/types/content";
import { Flex, Title, Description, Wrapper } from "./styles";

const Service = ({ image, description, title }: ServiceType) => {
  return (
    <Flex>
      <Wrapper>
        <img src={image} alt={title} />
      </Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Flex>
  );
};

export default Service;
