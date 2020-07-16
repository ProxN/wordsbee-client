import styled, { css } from 'styled-components';

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.red.light};
  `};
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.gray.light2};
  `};
`;
