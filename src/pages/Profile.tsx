import { Button, FormControl, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
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
`;

function Profile(): React.ReactElement {
  const { user, authError } = useAuth();

  if (!user) {
    return <Error message={authError} />;
  }

  const { email, displayName } = user;

  return (
    <main className="profilemain">
      <ProfileWrapper>
        <Box id="topSection">
          <Grid container spacing={0}>
            <Grid item direction="column">
              <Box sx={{ borderRadius: '50%' }}>
                <img src="https://th.bing.com/th/id/R.e6717254470eaf137158f3be5c96c83e?rik=8m6MRRgeuqO5rQ&pid=ImgRaw&r=0" alt="" width="90px" />
                <img src="https://th.bing.com/th/id/R.e6717254470eaf137158f3be5c96c83e?rik=8m6MRRgeuqO5rQ&pid=ImgRaw&r=0" alt="" width="90px" />
              </Box>
              <Button variant="text" color="primary">
                change
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Stack direction="column">
          {displayName !== null ? (
            <>
              <h2>Name: {displayName}</h2>
              <h2>E Mail: {email}</h2>
            </>
          ) : (
            <>
              <h2>Name: </h2>
              <h2>E Mail: {email}</h2>
            </>
          )}
        </Stack>
      </ProfileWrapper>
      <Box>
        {' '}
        {/* displayname */}
        <FormControl>
          {/* <FormLabel>DisplayName</FormLabel> */}

          {/* <TextField id="displayname" label="Display name" value={userprofile.displayName} /> */}
        </FormControl>
        {/* age */}
        {/* weight */}
        {/* goal */}
      </Box>
    </main>
  );
}
export default Profile;
