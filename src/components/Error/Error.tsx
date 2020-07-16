import React from 'react';
import { ErrorContainer, ErrorMessage } from './styles';

interface Props {
  message: string;
}

const Error: React.FC<Props> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
