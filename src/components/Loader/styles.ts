import styled, { css, keyframes } from 'styled-components';

interface StylesProps {
  marginLeft?: string;
}

export const LoaderContainer = styled.div<StylesProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: ${(props) => props.marginLeft};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  width: 80px;
  flex-wrap: wrap;
`;

const Animation = keyframes`
    from {
      background:#052034;
    }
 
    to {
       background:#93dd5c;
    }
`;
export const Circle = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.light};
  `};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
  :not(:last-child) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  animation: ${Animation} 1s infinite alternate;
  :nth-child(1) {
    animation-delay: 0.1s;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(2) {
    animation-delay: 0.3s;
  }
  :nth-child(3) {
    animation-delay: 0.4s;
  }
  :nth-child(4) {
    animation-delay: 0.5s;
  }
  :nth-child(5) {
    animation-delay: 0.6s;
  }
  :nth-child(6) {
    animation-delay: 0.7s;
  }
  :nth-child(7) {
    animation-delay: 0.8s;
  }
  :nth-child(8) {
    animation-delay: 0.9s;
  }
  :nth-child(9) {
    animation-delay: 1s;
  }
`;
