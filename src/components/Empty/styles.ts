import styled, { css } from 'styled-components';

interface StylesProps {
  marginLeft?: string;
}

export const EmptyBox = styled.div<StylesProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${(props) => props.marginLeft};
`;

export const EmptyIcon = styled.div`
  width: 150px;
  height: 150px;
  svg {
    width: 150px;
    height: 150px;
    stroke: rgba(147, 221, 92, 01);
    fill: rgba(147, 221, 92, 0.3);
  }
`;

export const EmptyTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h2};
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.dark.light};
  `};
  opacity: 0.9;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const EmptySubTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
  `};
  opacity: 0.8;
`;
