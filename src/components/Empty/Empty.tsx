import React from 'react';
import Icon from '../Icon';
import { EmptyBox, EmptyIcon, EmptySubTitle, EmptyTitle } from './styles';

interface Props {
  data: {
    iconName: string;
    title: string;
    message: string;
  };
  marginLeft?: string;
}

const Empty: React.FC<Props> = ({ data, marginLeft }) => {
  const { iconName, title, message } = data;
  return (
    <EmptyBox marginLeft={marginLeft}>
      <EmptyIcon>
        <Icon name={iconName} />
      </EmptyIcon>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptySubTitle>{message}</EmptySubTitle>
    </EmptyBox>
  );
};

export default Empty;
