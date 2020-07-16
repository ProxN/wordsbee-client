import React from 'react';
import Link from './MenuLink';
import Icon from '../../../Icon';
import {
  SidebarMenuWrapper,
  SidebarMenuItem,
  SidebarMenuList,
} from './Menu.styles';

const Menu: React.FC = () => {
  return (
    <SidebarMenuWrapper>
      <SidebarMenuList>
        <SidebarMenuItem>
          <Link active href='/app'>
            <Icon size='md' name='overview' />
            Words
          </Link>
        </SidebarMenuItem>
      </SidebarMenuList>
    </SidebarMenuWrapper>
  );
};

export default Menu;
