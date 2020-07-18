import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './protected.route';
import { useStoreState } from './hooks/typedHooks';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Words from './pages/Words';
import Word from './pages/Word';
import NotFound from './pages/NotFound/NotFound';

const Routes: React.FC = () => {
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  return (
    <Switch>
      <Route
        render={() => (isAuthenticated ? <Redirect to='/app' /> : <Signin />)}
        path='/'
        exact
      />

      <Route
        render={() => (isAuthenticated ? <Redirect to='/app' /> : <Signup />)}
        path='/signup'
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
  );
};

export default Routes;
