import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions } from '../../hooks/typedHooks';
import { Header, Nav, LogoLink, Span, MenuList, MenuItem } from './styles';

const Navbar: React.FC = () => {
  const logout = useStoreActions((state) => state.auth.logout);

  const handleClick = useCallback(async (): Promise<void> => {
    await logout();
  }, [logout]);

  return (
    <Header>
      <Nav>
        <LogoLink href='/app'>
          Words
          <Span>Bee</Span>
        </LogoLink>
        <MenuList>
          <MenuItem as={Link} to='/app'>
            Words
          </MenuItem>
          <MenuItem onClick={handleClick}>Logout</MenuItem>
        </MenuList>
      </Nav>
    </Header>
  );
};

export default Navbar;
