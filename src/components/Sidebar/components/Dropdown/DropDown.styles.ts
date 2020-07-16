import styled, { css } from 'styled-components';

export const DropDownList = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-top: 2px solid ${({ theme }) => theme.colors.primary.light};
`;

export const DropDownItems = styled.div`
  padding: 10px 0;
`;

export const DropDownItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
  `};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 25px;
  text-transform: capitalize;
  line-height: normal;
  div:first-child {
    margin-right: 15px;
  }
  svg {
    stroke: ${({ theme }) => theme.colors.gray.light};
  }
`;
