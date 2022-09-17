import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Unauthorized from './pages/Unauthorized';
import { AuthenticatedUser } from './store/userSlice';
import useAuth from './utils/useAuth';

interface RouteConfig {
  element: React.ReactNode;
  path: string;
  authHandler: (auth: AuthenticatedUser | null) => boolean;
}

function ProtectedRoutes({ routes }: { routes: Array<RouteConfig> }) {
  /** if current route is in routes, check authorization,
   * nav to Unauthorized if fails
   */
  const navigate = useNavigate();
  /** Guard */
  const location = useLocation();

  const { authHandler = () => true } = routes.find(({ path }) => location.pathname.includes(path)) ?? {};

  const user = useAuth();

  if (authHandler && user && authHandler(user) === false) {
    // navigate the user out
    navigate('/unauthorized');
  }

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
}

function App() {
  const routes: Array<RouteConfig> = [
    { path: 'profile', element: <Profile />, authHandler: (user) => !!user },
    // {path: 'exercise', element: <Exer}
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<ProtectedRoutes routes={routes} />} />

        {/* <Route path="*" element={<ProtectedRoutes />}>
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />}></Route>
          <Route path="exercise" element={<Outlet />}>
            <Route path="new" element={<NewExercise />} />
            <Route path="timeline" element={<ExerciseTimeline />} />
            <Route path="*" element={<Navigate to={'/new'} />} />
          </Route>
        </Route> */}
        {/* <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="admin"
          element={
            <ProtectedRoute adminRoute>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
