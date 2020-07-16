import React from 'react';
import {
  CloseBtn,
  CloseContainer,
  FormContainer as Container,
  FormContent,
} from './FormContainer.styles';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const FormContrainer: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Container>
      <CloseContainer>
        <CloseBtn onClick={onClick} />
      </CloseContainer>
      <FormContent>{children}</FormContent>
    </Container>
  );
};

export default FormContrainer;
