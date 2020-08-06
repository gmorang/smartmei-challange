import React from 'react';

import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

// import { Container } from './styles';

interface Props {
  component: any,
  path?: string,
}

const PublicRoute: React.FC<Props> = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      path={path}
      element={<Layout component={Component} />}
    />
  );
}

export default PublicRoute;
