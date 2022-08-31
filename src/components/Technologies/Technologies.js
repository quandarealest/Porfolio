import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From Front-end to Backend, Database and Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            Javascript, HTML, CSS
            <br />
            React.js
            <br />
            Redux
            <br />
            Redux-Saga/Redux Toolkit
            <br />
            Ant Design/Material UI/Bootstrap
            <br />
            Meteor.js
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            Node.js
            <br />
            Express.js
            <br />
            MongoDB
            <br />
            MySQL
            <br />
            SQL/NoSQL
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>
            Tools
          </ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            Visual Studio Code
            <br />
            Git
            <br />
            Figma/Zeplin
            <br />
            Mongo Atlas/Mongo Compass
            <br />
            MSSQL Server
            <br />
            Postman
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
