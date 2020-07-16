import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  Component: React.FC;
  exact: boolean;
  path: string;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
