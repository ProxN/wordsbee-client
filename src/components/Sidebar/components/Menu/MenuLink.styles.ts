import styled, { css } from 'styled-components';

interface StyleProps {
  active: number;
}

const SidebarMenuLink = styled.a<StyleProps>`
  ${({ theme, active }) => css`
    color: ${active === 1
      ? theme.colors.secondary.light
      : theme.colors.gray.mid};
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
    stroke: ${({ active, theme }) => active && theme.colors.secondary.light};
  }
`;

export default SidebarMenuLink;
