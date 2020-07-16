import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const LoginContainer = styled.div`
  grid-column: 1 /-1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet} {
    grid-row: 2/3;
  }
`;

export const ForgotLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
  `};
  display: flex;
  justify-content: flex-end;
  opacity: 0.8;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 500;
`;
