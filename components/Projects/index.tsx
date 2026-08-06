"use client";

import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "@/content/projects";
import type { ProjectCategory } from "@/types/content";
import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import Project from "./Project";
import {
  Grid,
  Filters,
  FilterButton,
  Pagination,
  PageButton,
  PageInfo,
  Empty,
} from "./styles";

const PER_PAGE = 3;

type Filter = "all" | ProjectCategory;

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web App", value: "web app" },
  { label: "Mobile App", value: "mobile app" },
  { label: "Open Source", value: "open source" },
];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const pageCount = Math.ceil(filtered.length / PER_PAGE);
  // Clamp the page in case the active filter shrank the list below the offset.
  const currentPage = Math.min(page, Math.max(pageCount - 1, 0));
  const visible = filtered.slice(
    currentPage * PER_PAGE,
    currentPage * PER_PAGE + PER_PAGE
  );

  const changeFilter = (value: Filter) => {
    setFilter(value);
    setPage(0);
  };

  return (
    <Section sectionId="projects" primary>
      <Container $maxWidth="lg">
        <Title>Projects</Title>

        <Filters>
          {FILTERS.map(({ label, value }) => (
            <FilterButton
              key={value}
              type="button"
              $active={filter === value}
              onClick={() => changeFilter(value)}
            >
              {label}
            </FilterButton>
          ))}
        </Filters>

        {visible.length > 0 ? (
          <Grid>
            {visible.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </Grid>
        ) : (
          <Empty>No projects in this category yet.</Empty>
        )}

        {pageCount > 1 && (
          <Pagination>
            <PageButton
              type="button"
              aria-label="Previous projects"
              disabled={currentPage === 0}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
            >
              <FaChevronLeft />
            </PageButton>
            <PageInfo>
              {currentPage + 1} / {pageCount}
            </PageInfo>
            <PageButton
              type="button"
              aria-label="Next projects"
              disabled={currentPage >= pageCount - 1}
              onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
            >
              <FaChevronRight />
            </PageButton>
          </Pagination>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
