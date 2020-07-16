import React from 'react';
import Icons from './icons';

import { SvgWrapper, Svg } from './styles';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  storke?: string;
  name: string;
}

const Icon: React.FC<Props> = ({ size, color, storke, name }) => {
  const Ic = Icons[name];
  if (!Ic) return null;

  return (
    <React.Suspense fallback='loading ...'>
      <SvgWrapper size={size}>
        <Svg as={Ic} color={color} storke={storke} />
      </SvgWrapper>
    </React.Suspense>
  );
};

Icon.defaultProps = {
  size: 'sm',
  color: '#bac4c5',
  storke: '#ccd4d5',
};

export default Icon;
