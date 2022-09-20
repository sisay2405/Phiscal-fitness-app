/* eslint-disable prettier/prettier */
import React from 'react'
import Grid from '@mui/material/Grid';
import { Exercise } from '../utils/type';

function ExerciseSummary({ exercise }: { exercise: Exercise }) {
  return (
    <Grid container>
      <Grid item xs={6}>
        <strong>{exercise.type}</strong>
      </Grid>
      <Grid item xs={6}>
        Duration
      </Grid>
      <Grid item xs={12}>
        Date
      </Grid>
    </Grid>
  );
}

export default ExerciseSummary;
