import React from 'react';
import Section from '../../components/Section';
import Empty from '../../components/Empty';
import errorMessage from '../../constants/errorMessage';
import { useStoreState } from '../../hooks/typedHooks';

const NotFound: React.FC = () => {
  const isAuthenicated = useStoreState((state) => state.auth.isAuthenticated);
  return (
    <Section>
      <Empty
        marginLeft={!isAuthenicated ? '-115px' : '0'}
        isAuth={isAuthenicated}
        data={errorMessage.notFound}
      />
    </Section>
  );
};

export default NotFound;
