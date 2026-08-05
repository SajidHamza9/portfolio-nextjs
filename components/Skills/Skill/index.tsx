"use client";

import React from "react";
import type { Skill as SkillType } from "@/types/content";
import { Card, Name } from "./styles";

const Skill = ({ image, title }: SkillType) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Name>{title}</Name>
    </Card>
  );
};

export default Skill;
