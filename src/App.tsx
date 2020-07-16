import React, { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import shallowEqual from 'shallowequal';
import { useStoreActions, useStoreState } from './hooks/typedHooks';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Word from './pages/Word';
import Words from './pages/Words';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './protected.route';

const App: React.FC = () => {
  const getUser = useStoreActions((state) => state.auth.getUser);

  const { isLoading, isAuthenticated } = useStoreState(
    (state) => ({
      isLoading: state.auth.isLoading,
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      await getUser();
    };
    if (!isAuthenticated) {
      onLoad();
    }
  }, [getUser, isAuthenticated]);

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <Switch>
        <Route
          render={() => (isAuthenticated ? <Redirect to='/app' /> : <Signup />)}
          path='/signup'
          exact
        />
        <Route
          render={() => (isAuthenticated ? <Redirect to='/app' /> : <Signin />)}
          path='/'
          exact
        />
        <ProtectedRoute
          Component={Words}
          path='/app'
          isAuthenticated={isAuthenticated}
          exact
        />
        <ProtectedRoute
          Component={Word}
          path='/words/:wordId'
          isAuthenticated={isAuthenticated}
          exact
        />

        <Route component={NotFound} path='*' />
      </Switch>
    </Layout>
  );
};
export default App;
