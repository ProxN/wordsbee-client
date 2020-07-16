import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
  `};
  height: 60px;
  width: 100%;
  grid-column: 1/ -1;
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

export const Nav = styled.nav`
  padding: 0 25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${media.thone} {
    padding: 0 10px;
  }
`;

export const LogoLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.medium};
  `};
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  line-height: 13px;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.light};
    font-size: ${theme.fontSizes.regular};
  `};
  font-weight: 400;
`;

export const MenuList = styled.div`
  display: flex;
`;

export const MenuItem = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.small};
  `};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 12px;
  text-transform: capitalize;
  line-height: normal;
`;
