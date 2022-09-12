import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, smile <br /> and Repeat
      </Typography>
      <Typography mb={2}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#F0A514', padding: '10px' }}>
        Explore Exercises
      </Button>
    </Box>
  );
};

export default HeroBanner;
