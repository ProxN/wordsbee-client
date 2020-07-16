import styled, { css } from 'styled-components';

export const DropDownRoot = styled.div`
  position: relative;
`;

export const DropDownControl = styled.div`
  display: flex;
  padding: 8px 0px;
  border: 1px solid #e3e3e5;
  border-radius: 3px;
`;

export const DropDownPlaceHolder = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
  `};
  padding: 0 10px;
`;

export const DropDownMenu = styled.div`
  border: 1px solid #e3e3e5;
  position: absolute;
  top: 100%;
  background: #fff;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  z-index: 11;
`;

export const DropDownItem = styled(DropDownPlaceHolder)`
  padding: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.secondary.light};
  }
`;

export const TranslateResult = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
    font-size: ${theme.fontSizes.small};
  `};
  opacity: 0.9;
  margin-top: 10px;
  font-weight: 500;
`;
