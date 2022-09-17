import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth';

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      <h2>Home</h2>
      <p>
        Welcome to a front-end-only React authentication/authorization demo
        {/* using Firebase's free authentication service!{' '} */}
        {!isAuthenticated && (
          <span>
            Do you need to <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>?
          </span>
        )}
      </p>
    </main>
  );
}

export default Home;