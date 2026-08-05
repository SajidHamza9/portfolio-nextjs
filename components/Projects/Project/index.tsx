"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import type { Project as ProjectType } from "@/types/content";
import {
  Card,
  Row,
  MediaCol,
  ContentCol,
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
      <Row>
        <MediaCol>
          <CardMedia>
            <img src={image} alt={title} />
          </CardMedia>
        </MediaCol>
        <ContentCol>
          <CardContent>
            <CardHeader>
              <ProjectName>{title}</ProjectName>
              <Actions>
                {github && (
                  <Link target="_blank" href={github}>
                    <FaGithub />
                  </Link>
                )}
                {demo && (
                  <Link target="_blank" href={demo}>
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
        </ContentCol>
      </Row>
    </Card>
  );
};

export default Project;
