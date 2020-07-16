import React from 'react';
import { LoaderContainer, LoaderWrapper, Circle } from './styles';

interface Props {
  marginLeft?: string;
}

const Loader: React.FC<Props> = ({ marginLeft }) => {
  return (
    <LoaderContainer data-testid='loader' marginLeft={marginLeft}>
      <LoaderWrapper>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default Loader;
