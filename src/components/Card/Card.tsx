import React from 'react';
import { CardContainer, CardHeading, SubHeading } from './styles';

interface Props {
  children?: React.ReactNode;
  heading?: string;
  subHeading?: string;
  bg?: string;
  height?: string;
  onClick?: () => void;
}

const Card: React.FC<Props> = (props) => {
  const { children, heading, subHeading, bg, height, onClick } = props;
  return (
    <CardContainer onClick={onClick} bg={bg} height={height}>
      {heading && (
        <CardHeading>
          {heading}
          {subHeading && (
            <SubHeading>
              &nbsp;
              {subHeading}
            </SubHeading>
          )}
        </CardHeading>
      )}
      {children}
    </CardContainer>
  );
};

Card.defaultProps = {
  bg: '#fff',
};

export default Card;
