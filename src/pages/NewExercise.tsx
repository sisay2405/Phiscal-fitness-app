import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import React, { useState } from 'react';

function NewExercise() {
  const workoutOptions = ['', 'pull up', 'push bar', 'squats', 'abs', 'legs'];

  const repOptions = [1, 2, 3, 5, 7, 10, 12, 15, 20, 30, 45, 70, 100];

  const [exerciseType, setexerciseType] = useState('');
  const [reps, setReps] = useState(null);

  const showWorkoutOptions = (workoutOptions: Array<number | string>) =>
    workoutOptions.map((workout) => <MenuItem value={workout}>{workout}</MenuItem>);

  const handleExerciseChange = (event: any) => setexerciseType(event.target.value);

  const updateReps = (event: any) => setReps(event.target.value);
  /**
   * design box container with padding and column grid
   */
  return (
    <Box sx={{ padding: 10 }}>
      <form className="flex-column padding ">
        <Stack spacing={5}>
          <h2>New Exercise</h2>

          {/* exercise type, reps target, completed/not checkbox */}

          <FormControl fullWidth>
            <InputLabel id="exerciseTypeSelect">Exercise Type</InputLabel>
            <Select id="exerciseTypeSelect" label="Exercise type" value={exerciseType} onChange={handleExerciseChange}>
              {showWorkoutOptions(workoutOptions)}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="repsSelect">Reps</InputLabel>
            <Select label="Reps" value={reps} id="repsSelect" onChange={updateReps}>
              {showWorkoutOptions(repOptions)}
            </Select>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
}

export default NewExercise;
