import React from 'react';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { EmptyBox, EmptyIcon, EmptySubTitle, EmptyTitle } from './styles';

interface Props {
  data: {
    iconName: string;
    title: string;
    message: string;
  };
  marginLeft?: string;
  isAuth?: boolean;
}

const Empty: React.FC<Props> = ({ data, marginLeft, isAuth }) => {
  const { iconName, title, message } = data;
  return (
    <EmptyBox marginLeft={marginLeft}>
      <EmptyIcon>
        <Icon name={iconName} />
      </EmptyIcon>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptySubTitle>{message}</EmptySubTitle>
      <br />
      {!isAuth && (
        <EmptyTitle as={Link} to='/'>
          Back To Home
        </EmptyTitle>
      )}
    </EmptyBox>
  );
};

export default Empty;
