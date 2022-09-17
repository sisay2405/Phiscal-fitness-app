import React, { ReactNode } from 'react';
import { Navigate, Routes } from 'react-router-dom';
import useAuth from '../utils/useAuth';

type ProtectedRouteProps = {
  children: ReactNode;
  adminRoute?: boolean;
};

function ProtectedRoute({ children, adminRoute = false }: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Routes>{children}</Routes>;
}

export default ProtectedRoute;
