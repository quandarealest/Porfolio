import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
          this is Quan Bui
      </SectionTitle>
      <SectionText>
        Web developer full time 💻, Chelsea die-hard fan part time ⚽
      </SectionText>
      <Button onClick={() => {
        window.location = 'https://www.linkedin.com/in/quanbkm/'
      }}>Let's grab a coffee</Button>
    </LeftSection>
  </Section>
);

export default Hero;