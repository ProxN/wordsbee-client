import styled, { css, CSSProp } from 'styled-components';

interface StyleProps {
  size?: string;
  rounded?: boolean;
  variant?: string;
  fullWidth?: boolean;
}

const sizes: { [key: string]: string } = {
  sm: '5px 10px',
  md: '7px 14px',
  lg: '10px 20px',
};

const PrimaryStyles = css`
  color: ${({ theme }) => theme.colors.gray.light2};
  background: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.2);

  :disabled {
    background: ${({ theme }) => theme.colors.secondary.light};
    opacity: 0.6;
    cursor: auto;
  }

  :hover:enabled {
    background: ${({ theme }) => theme.colors.secondary.dark};
    color: ${({ theme }) => theme.colors.gray.light2};
  }
`;

const DefaultStyles = css`
  color: ${({ theme }) => theme.colors.primary.dark};
  background: #fff;
  border: 1px solid rgba(38, 54, 69, 0.3);
`;

const DashedStyles = css`
  color: ${({ theme }) => theme.colors.primary.dark};
  background: #fff;
  border: 1px dashed rgba(38, 54, 69, 0.3);
`;

const DangerStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light2};
    background: ${theme.colors.red.dark};
  `};
`;

const styles: { [key: string]: CSSProp } = {
  default: DefaultStyles,
  primary: PrimaryStyles,
  dashed: DashedStyles,
  danger: DangerStyles,
};

export default styled.button<StyleProps>`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  font-weight: 400;
  width: ${(props) => props.fullWidth && '100%'};
  padding: ${(props) => sizes[props.size as string]};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  border-radius: ${(props) => props.rounded && '3px'};
  ${(props) => styles[props.variant as string]};
`;
