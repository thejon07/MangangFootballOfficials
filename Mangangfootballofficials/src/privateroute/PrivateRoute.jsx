import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <Outlet /> : <Navigate to="/Home" />;
}

export default PrivateRoute;
