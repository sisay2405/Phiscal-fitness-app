import Error from 'components/Error';
import React from 'react';
import useAuth from '../utils/useAuths';

function Profile() {
  const { user, authError } = useAuth();

  if (!user) {
    // return <Navigate to="/signin" />;
    return <Error message={authError} />;
  }

  const { email, displayName } = user;

  return (
    <main>
      <section>
        <div>{displayName}</div>

        <div>{email}</div>
      </section>
      {/* {isAuthenticated && (
      )}
      {!isAuthenticated && (
        <section>
          <h1>{localStorage.getItem('name')}</h1>
          <h1>{localStorage.getItem('email')}</h1>
        </section>
      )} */}
    </main>
  );
}
export default Profile;
