/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuths';

function Home() {
  const { user } = useAuth();

  return (
    <main>
      <p>
        home page display here
        {!user && (
          <span>
            Do you need to <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>?
          </span>
        )}
      </p>
    </main>
  );
}

export default Home;
