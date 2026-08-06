"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import type { Project as ProjectType } from "@/types/content";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  ProjectName,
  Actions,
  ProjectDesc,
  Flex,
  Tech,
  Link,
} from "./styles";

const Project = ({
  title,
  image,
  description,
  tags,
  github,
  demo,
  animation,
}: ProjectType) => {
  return (
    <Card data-aos={animation}>
      <CardMedia>
        <img src={image} alt={title} />
      </CardMedia>
      <CardContent>
        <CardHeader>
          <ProjectName>{title}</ProjectName>
          <Actions>
            {github && (
              <Link target="_blank" href={github} aria-label={`${title} source code`}>
                <FaGithub />
              </Link>
            )}
            {demo && (
              <Link target="_blank" href={demo} aria-label={`${title} live demo`}>
                <MdLaunch />
              </Link>
            )}
          </Actions>
        </CardHeader>
        <ProjectDesc>{description}</ProjectDesc>
        <Flex>
          {tags.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </Flex>
      </CardContent>
    </Card>
  );
};

export default Project;
