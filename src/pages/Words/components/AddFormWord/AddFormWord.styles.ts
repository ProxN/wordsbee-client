import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 350px;
`;

export const FormTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.secondary};
  `};
  font-weight: 500;
  opacity: 0.9;
  text-transform: capitalize;
  margin-bottom: 15px;
`;

export const FormAction = styled.div`
  display: flex;
  margin-top: 15px;
`;
