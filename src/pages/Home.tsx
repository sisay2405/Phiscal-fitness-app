import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuths';
import HeroBannerImage from '../assets/images/banner.png';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1 }} position="relative" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
          Sweat, Smile <br />
          And Repeat
          <Stack>
            <a
              href="#exercises"
              style={{
                marginTop: '45px',
                textDecoration: 'none',
                width: '700px',
                textAlign: 'center',
                background: '#FF2625',
                padding: '14px',
                fontSize: '22px',
                textTransform: 'none',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              Check out the most effective exercises personalized to you
            </a>
          </Stack>
          <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
            Exercise
          </Typography>
          <Stack direction="column" rowGap={5} sx={{ fontSize: { lg: '30px', xs: '30px' } }}>
            {!user && (
              <span>
                Do you need to <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>?
              </span>
            )}
          </Stack>
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
      </Box>
    </div>
  );
}

export default Home;
