import { Box } from '@mui/system';
import React from 'react';

function PreviousExercises() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 4fr ', gap: '4' }}>
      <ul>
        <h2>List of Previous Exercises Completed</h2>
        <h3>date: -----</h3>
        <h3>Exercise Type: -------</h3>
        <h3>Reps:------</h3>
        <h3>completed: ----</h3>
      </ul>
    </Box>
  );
}

export default PreviousExercises;
