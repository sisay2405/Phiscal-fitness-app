import { AddCircleOutlineRounded } from '@mui/icons-material';
import { Autocomplete, Box, Button, FormControl, Stack, TextField, IconButton } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { exerciseStore } from '../utils/firebase';
import { Exercise } from '../utils/type';
import useTimer from './useTimer';

function ExerciseDetails({ exercise }: { exercise: Exercise | null }) {
  const templateExercise: Exercise = useMemo(
    () => ({
      type: '',
      endTime: null,
      startTime: Date.now(),
      id: null,
      reps: [],
      duration: null,
    }),
    [],
  );

  const setOrReps = [1, 3, 5, 7, 9];

  const workoutOptions = ['', 'pull up', 'push bar', 'squats', 'abs', 'legs'];
  const [reps, setReps] = useState(0);
  const [exerciseData, setExerciseData] = useState<Exercise>(templateExercise);
  const timer = useTimer();

  useEffect(() => {
    if (exercise) {
      setExerciseData(exercise);
    }
  }, [exercise]);

  const setExerciseField = (key: keyof Exercise, value: any) => {
    setExerciseData({ ...exerciseData, [key]: value });
  };

  const handleUpdateorCreate = (exercise: Exercise) => {
    const data = { ...exercise, duration: { ...timer.elapsedTime } };
    timer.reset();

    exerciseStore().createOrUpdate(data);
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
              selectOnFocus
              value={exerciseData?.type}
              onChange={(event, newValue) => setExerciseField('type', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={exerciseData?.type}
                  label="Enter workout type"
                  onChange={(event) => setExerciseField('type', event.target.value)}
                />
              )}
            />
          </FormControl>

          <Box display="flex">
            <Button variant="text" color="primary" type="submit">
              {getOperation(exerciseData)}
            </Button>

            <Button variant="text" color="primary" onClick={() => timer.startOrPause()}>
              {timer.stateLabel}
            </Button>

            <Button variant="text" color="primary" onClick={() => timer.reset()}>
              reset
            </Button>

            <TextField
              id="elapsedTime"
              label={`Elapsed time ${timer.isRunning ? 'running' : 'stopped'}`}
              value={`${timer.elapsedTime.value} ${timer.elapsedTime.timeUnit}`}
              color="primary"
              disabled
            />

            <Autocomplete
              freeSolo
              id="exerciseRepsInput"
              disableClearable
              options={setOrReps}
              selectOnFocus
              value={exerciseData?.type}
              sx={{ width: '150px' }}
              onChange={(event, newValue) => {
                if (!Number.isNaN(newValue)) setReps(Number(newValue));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter reps"
                  type="number"
                  onChange={(event) => event.target.value && setReps(parseInt(event.target.value, 10))}
                />
              )}
            />

            <IconButton
              aria-label="add a rep to workout"
              onClick={() => setExerciseField('reps', [...(exerciseData.reps || []), reps])}
            >
              <AddCircleOutlineRounded />
            </IconButton>

            <TextField
              id="startTime"
              label="Start Time"
              disabled
              value={!exerciseData?.startTime ? 'no date' : new Date(exerciseData.startTime).toISOString()}
            />
          </Box>

          {/* reps */}

          <Box>
            <ol>
              <Stack direction="column" rowGap={1}>
                {exerciseData?.reps?.map((_rep) => (
                  <li key={`${_rep}`}>{`${_rep} rep(s)`}</li>
                ))}
              </Stack>
            </ol>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default ExerciseDetails;
