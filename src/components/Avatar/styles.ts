import styled, { css } from 'styled-components';

export default styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.dark.light};
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.regular};
    font-family: ${theme.fonts.secondary};
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-weight: 500;
  text-transform: uppercase;
`;
