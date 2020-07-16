import React from 'react';
import StyledAvatar from './styles';

interface Props {
  name?: string;
  img?: string;
}

const Avatar: React.FC<Props> = ({ name }) => {
  return <StyledAvatar>{name}</StyledAvatar>;
};

export default Avatar;
