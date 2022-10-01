import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Error from 'components/Error';
import React from 'react';
import styled from 'styled-components';
import useAuth from '../utils/useAuths';

const ProfileWrapper = styled.footer`
  margin-top: 100px;
  width: 420px;
  overflow: hidden;
  text-align: center;
  position: relative;
  box-shadow: 0 0 10px #00000070;
`;

function Profile(): React.ReactElement {
  const { user, authError } = useAuth();

  if (!user) {
    return <Error message={authError} />;
  }

  const { email, displayName } = user;

  return (
    <main>
      <ProfileWrapper className="profilePage">
        <h3>Name: {displayName}</h3>
        <h3>E Mail: {email}</h3>
      </ProfileWrapper>

      <Box id="topSection">
        <Grid container spacing={0}>
          <Grid item flexGrow="initial">
            <Box sx={{ borderRadius: '50%' }}>
              <img
                src="https://th.bing.com/th/id/R.e6717254470eaf137158f3be5c96c83e?rik=8m6MRRgeuqO5rQ&pid=ImgRaw&r=0"
                alt=""
                width="90px"
              />
            </Box>
          </Grid>
          <Grid item>
            <Stack direction="column">
              <h2>Prrofile</h2>
              <span>Update your photo and personal details</span>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box id="detailSection">
        <h2>Profile Details</h2>
      </Box>
    </main>
  );
}
export default Profile;
