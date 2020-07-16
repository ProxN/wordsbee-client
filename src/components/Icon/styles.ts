import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface StyleProps {
  size?: string;
  color?: string;
  storke?: string;
}

const getSize = (size: string): FlattenSimpleInterpolation => {
  let def = 15;
  if (size !== 'sm') {
    def = size === 'md' ? 20 : 30;
  }
  return css`
    height: ${def}px;
    width: ${def}px;
  `;
};

export const SvgWrapper = styled.div<StyleProps>`
  ${(props) => getSize(props.size as string)}
`;

export const Svg = styled.img<StyleProps>`
  height: 100%;
  width: 100%;
  stroke: ${(props) => props.storke};
`;
