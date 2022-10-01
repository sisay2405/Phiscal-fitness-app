import React from 'react';
import { RemoveCircleOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { exerciseStore } from '../utils/firebase';
import { Exercise } from '../utils/type';

function ExerciseSummary({ exercise, onClick }: { exercise: Exercise; onClick: () => void }) {
  const date = !exercise?.startTime ? '' : new Date(exercise?.startTime).toLocaleDateString();

  return (
    <Grid container sx={{ rowGap: 3 }}>
      <Grid item xs={6}>
        <strong>{exercise.type}</strong>
      </Grid>
      <Grid item xs={6}>
        Duration {`${exercise?.duration?.value} ${exercise?.duration?.timeUnit}`}
      </Grid>
      <Grid item xs={12}>
        Date {date}
      </Grid>
      <Grid item xs={12} display="flex" columnGap={1}>
        <Button variant="outlined" color="primary" onClick={onClick}>
          Details
        </Button>
        <Button
          variant="contained"
          color="warning"
          startIcon={<RemoveCircleOutlined />}
          onClick={() => exerciseStore().remove(exercise)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default ExerciseSummary;
