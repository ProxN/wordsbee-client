import React from 'react';
import SigninContainer from './styles';
import SignUpForm from './components/SignupForm';

const Signin: React.FC = () => {
  return (
    <SigninContainer>
      <SignUpForm />
    </SigninContainer>
  );
};
export default Signin;
