import { Stack } from '@mui/material';
import Error from 'components/Error';
import React from 'react';
import styled from 'styled-components';
import useAuth from '../utils/useAuths';

const ProfileWrapper = styled.footer`
  margin-top: 100px;
  width: 600px;
  overflow: hidden;
  text-align: center;
  position: relative;
  box-shadow: 0 0 10px #00000070;
  h2 {
    color: #f0a514;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .profilePhoto {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-left: 150px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

function Profile(): React.ReactElement {
  const { user, authError } = useAuth();

  if (!user) {
    return <Error message={authError} />;
  }

  const { email, displayName, photoURL } = user;

  return (
    <main className="profilemain">
      <ProfileWrapper>
        <Stack direction="column">
          {displayName !== null ? (
            <>
              <div className="profilePhoto">
                <img
                  className="profilePhoto"
                  src={photoURL || 'https://th.bing.com/th/id/R.e6717254470eaf137158f3be5c96c83e?rik=8m6MRRgeuqO5rQ&pid=ImgRaw&r=0" alt="" width="90px"'}
                  alt="#"
                />
              </div>
              <div>
                <h2>Name: {displayName}</h2>
                <h2>E Mail: {email}</h2>
              </div>
            </>
          ) : (
            <>
              <h2>Name: </h2>
              <h2>E Mail: {email}</h2>
            </>
          )}
        </Stack>
      </ProfileWrapper>
    </main>
  );
}
export default Profile;
