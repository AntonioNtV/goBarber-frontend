import React, { useCallback } from 'react';
import { RouteProps as ReactDOMRouterProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={
          () => (isPrivate === !!user ? (
            <Component />
          ) : (
            <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
          ))
        }
    />
  );
};

export default Route;
