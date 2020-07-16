import styled, { css } from 'styled-components';

interface StyledProps {
  rounded?: boolean;
  fullWidth?: boolean;
  margin?: boolean;
}

export const InputContainer = styled.div<StyledProps>`
  position: relative;
  margin-bottom: ${({ margin }) => margin && '12px'};
`;

export const StyledInput = styled.input<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.primary};
    ::placeholder {
      color: ${theme.colors.dark.dark};
      font-weight: 600;
      opacity: 0.5;
    }
    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary.light};
    }
  `};
  font-weight: 700;
  border: none;
  padding: 9px 36px 9px 14px;
  line-height: 1;
  outline: none;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.41);
  width: ${({ fullWidth }) => fullWidth && '100%'};
  border-radius: ${({ rounded }) => (rounded ? '50px' : '4px')};
`;

export const IconBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  right: 12px;
  align-items: center;
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.small};
  `};
  opacity: 0.9;
  margin-bottom: 5px;
  text-transform: capitalize;
  display: block;
`;

export const ErrorLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red.dark};
    font-size: ${theme.fontSizes.small};
  `};
  margin-top: 5px;
  display: flex;
  opacity: 0.8;
`;
