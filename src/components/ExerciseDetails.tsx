import { Autocomplete, Box, Button, FormControl, Stack, TextField } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { exerciseStore } from '../utils/firebase';
import { Exercise } from '../utils/type';

function ExerciseDetails({ exercise }: { exercise: Exercise | null }) {
  const templateExercise: Exercise = useMemo(
    () => ({
      type: '',
      endTime: '',
      startTime: '',
      id: null,
      reps: [],
    }),
    [],
  );

  const workoutOptions = ['', 'pull up', 'push bar', 'squats', 'abs', 'legs'];
  const [exerciseData, setExerciseData] = useState(() => exercise || templateExercise);

  useEffect(() => {
    setExerciseData(exercise || templateExercise);
  }, [exercise, templateExercise]);

  const setExerciseField = (key: keyof Exercise, value: any) => {
    setExerciseData((oldExercise) => ({ ...oldExercise, [key]: value }));
  };

  const handleUpdateorCreate = (exercise: Exercise) => {
    exerciseStore().createOrUpdate(exercise);
  };

  const makeSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('formSubmit.fired');

    return handleUpdateorCreate(exerciseData);
  };

  const getOperation = (exercise: Exercise) => (!exercise?.id?.length ? 'New' : 'Update');
  if (!exerciseData) return <Box>No Exercise</Box>;
  return (
    <Box sx={{ padding: 10 }}>
      <form className="flex-column padding " onSubmit={makeSubmitHandler}>
        <Stack spacing={5}>
          <h2>
            {getOperation(exerciseData)} Exercise {exerciseData.type}
          </h2>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              id="exerciseTypeInput"
              disableClearable
              options={workoutOptions}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  value={exerciseData?.type}
                  label="Enter workout type"
                  onChange={({ target }) => setExerciseField('type', target.value)}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </FormControl>
          <Box>
            <Button variant="text" color="primary" type="submit">
              {getOperation(exerciseData)}
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default ExerciseDetails;
