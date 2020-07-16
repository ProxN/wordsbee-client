import styled, { css } from 'styled-components';

export const FormCard = styled.div`
  background: #fff;
  width: 400px;
  padding: 25px 20px;
  border-radius: 6px;
  box-shadow: 0 0px 10px -6px rgba(0, 0, 0, 0.1),
    0 0 20px -1px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.h2};
    font-family: ${theme.fonts.secondary};
  `};
  opacity: 0.9;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  button {
    margin-top: 25px;
  }
`;

export const AlreadyHave = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
  `};
  opacity: 0.9;
  margin-top: 15px;
  text-align: center;
`;

export const FormLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.secondary.light};
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  font-size: 16px;
`;
