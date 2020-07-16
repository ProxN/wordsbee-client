import styled, { css } from 'styled-components';

interface StyleProps {
  bg?: string;
  height?: string;
}

export const CardContainer = styled.div<StyleProps>`
  background: ${(props) => props.bg};
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1),
    0 0 3px -1px rgba(0, 0, 0, 0.1);
  height: ${(props) => props.height};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: translateY(-3px);
  }
`;

export const CardHeading = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.dark.light};
    font-family: ${theme.fonts.secondary};
  `};
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const SubHeading = styled.span`
  font-size: 12px;
  opacity: 0.8;
  font-weight: 400;
`;
