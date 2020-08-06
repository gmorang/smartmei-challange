import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import App from '../App';
import PublicRoute from './PublicRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute path="/" component={App} />
      </Routes>
    </BrowserRouter>
  );
}
