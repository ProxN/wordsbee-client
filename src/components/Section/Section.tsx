import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTop,
  SectionHeading,
} from './styles';

interface Props {
  children?: React.ReactNode;
  headline?: React.ReactNode;
  render?: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, headline, render }) => {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionTop>
          <SectionHeading>{headline}</SectionHeading>
          {render && render}
        </SectionTop>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
