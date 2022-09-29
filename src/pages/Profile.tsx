import Error from 'components/Error';
import React from 'react';
import useAuth from '../utils/useAuths';

function Profile() {
  const { user, authError } = useAuth();

  if (!user) {
    return <Error message={authError} />;
  }

  const { email, displayName } = user;

  return (
    <main>
      <section>
        <div>{displayName}</div>

        <div>{email}</div>
      </section>
    </main>
  );
}
export default Profile;
