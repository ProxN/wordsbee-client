import React from 'react';
import UserAvatar from './components/UserAvatar/UserAvatar';
import { Logo, Menu } from './components';
import { SideWrapper, SideContent } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SideWrapper>
      <SideContent>
        <Logo />
        <Menu />
      </SideContent>
      <UserAvatar />
    </SideWrapper>
  );
};

export default React.memo(Sidebar);
