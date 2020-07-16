import styled, { css, keyframes, CSSProp } from 'styled-components';

interface StyleProps {
  type: string;
}

export const ToastContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  max-width: 250px;
  z-index: 11;
`;

const Animation = keyframes`
  from{
    transform:translate(110%);
  }
  to{
    transform:translate(0%);
  }
`;

const DefaultStyles = css`
  color: ${({ theme }) => theme.colors.dark.dark};
  background: #fff;
`;

const SuccessStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.green.dark};
  `}
`;

const ErrorStyles = css`
  background: ${({ theme }) => theme.colors.red.dark};
`;

const toastStyles: { [key: string]: CSSProp } = {
  success: SuccessStyles,
  error: ErrorStyles,
  default: DefaultStyles,
};

export const ToastBox = styled.div<StyleProps>`
  ${({ theme }) => css`
    background: ${theme.colors.red.dark};
    color: ${theme.colors.gray.light2};
    font-size: ${theme.fontSizes.small};
  `};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transform: scale(1);
  animation: ${Animation} 300ms forwards;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 15px;
  }
  ${(props) => toastStyles[props.type]}
`;
