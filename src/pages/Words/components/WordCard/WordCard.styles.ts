import styled, { css } from 'styled-components';

export const WordContent = styled.div`
  position: relative;
  overflow: hidden;
`;

export const WordName = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.secondary};
  `};
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  span {
    font-weight: 700;
  }
`;

export const WordDefinition = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
  `};
  font-weight: 400;
  opacity: 0.9;
  margin-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
