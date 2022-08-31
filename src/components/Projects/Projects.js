import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(project => (
        <BlogCard id={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {project.description}
          </CardInfo>
          <div>
            <TitleContent>
              Stack
            </TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </div>
          {project.link && (
            <UtilityList>
              <ExternalLinks href={project.link}>
                Source
            </ExternalLinks>
            </UtilityList>
          )}
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;