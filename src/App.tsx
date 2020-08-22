import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from './hooks/typedHooks';
import Layout from './components/Layout';
import Routes from './routes';
import Loader from './components/Loader';

const App: React.FC = () => {
  const getUser = useStoreActions((state) => state.auth.getUser);
  const isLoading = useStoreState((state) => state.auth.isLoading);

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      await getUser();
    };
    onLoad();
  }, [getUser]);

  if (isLoading) return <Loader />;
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};
export default App;
