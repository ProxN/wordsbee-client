import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  height: ${({ theme }) => theme.logoHeight};
  background: ${({ theme }) => theme.colors.primary.mid};
  display: flex;
  align-items: center;
  box-shadow: -3px 0px 8px -3px rgba(0, 0, 0, 0.2);
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
