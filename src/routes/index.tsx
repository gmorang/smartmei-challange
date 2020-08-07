import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ListJobs from '../pages/ListJobs';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute path="/" component={ListJobs} />
      </Routes>
    </BrowserRouter>
  );
}
