import React from 'react';
import { LoginContainer } from './styles';
import LoginForm from './components/LoginForm';

const Signup: React.FC = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default Signup;
