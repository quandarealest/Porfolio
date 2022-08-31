import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'IELTS band issued by Cambridge' },
  { number: 6, text: 'Years of experience', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}
          </BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
