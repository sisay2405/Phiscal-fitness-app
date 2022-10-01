import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuths';

function Home() {
  const { user } = useAuth();

  return (
    <main>
      <Stack direction="column" sx={{ mt: '20px' }} rowGap={1}>
        <span>home page display here</span>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
        {!user && (
          <span>
            Do you need to <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>?
          </span>
        )}
        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
        >
          Exercise
        </Typography>
      </Stack>
    </main>
  );
}

export default Home;
