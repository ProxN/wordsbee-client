import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
  height: 70px;
  display: flex;
  cursor: pointer;
  border-top: 3px solid ${({ theme }) => theme.colors.primary.mid};
  position: relative;
`;
export const UserContent = styled.div`
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const UserName = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.small};
  `};
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 500;
`;
