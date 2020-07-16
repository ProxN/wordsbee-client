import React from 'react';
import { Link } from 'react-router-dom';
import StyledLink from './MenuLink.styles';

interface Props {
  children?: React.ReactNode;
  active?: boolean | null;
  href: string;
  onClick?: () => void;
}

const MenuLink: React.FC<Props> = ({ children, href, active, onClick }) => {
  return (
    <StyledLink as={Link} to={href} active={active ? 1 : 0} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

const defaultProps: { active: boolean } = {
  active: false,
};

MenuLink.defaultProps = defaultProps;

export default MenuLink;
