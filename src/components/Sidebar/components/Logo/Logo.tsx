import React from 'react';
import { LogoLink, LogoWrapper, Span } from './Logo.styles';

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoLink href='/app'>
        Words
        <Span>Bee</Span>
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
