import { AddCircleOutlineRounded } from '@mui/icons-material';
import { Autocomplete, Box, Button, FormControl, IconButton, Stack, TextField } from '@mui/material';
import React, { ChangeEvent, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import useTimer from '../../features/components/useTimer';
import { exerciseStore } from '../../utils/firebase';
import { Exercise, Rep } from '../../utils/type';
import useAuth from '../../utils/useAuths';
import videoSources from '../../videoSource/videoSources';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { string } from 'prop-types';
import { getValue } from '@testing-library/user-event/dist/utils';

function ExerciseDetails({ exercise }: { exercise: Exercise }) {
  const setOrReps = [1, 3, 5, 7, 9];
  const { user } = useAuth();
  const makeNewExercise = useCallback(
    (uid = '', userId = user?.uid ?? 'no_user') => {
      const result: Exercise = {
        type: '',
        endTime: '',
        startTime: new Date().toISOString(),
        id: uid,
        userId,
        calories: 0,
        reps: [],
        duration: null,
      };
      return result;
    },
    [user],
  );

  const isValidExercise = useCallback(
    (exercise: Exercise | {} | null) => exercise && Object.keys(makeNewExercise()).every(key => key in exercise),
    [makeNewExercise],
  );

  const workoutOptions = [
    '',
    'Sit-Up',
    'Pullups',
    'Pushups',
    'Body-Up',
    'Butt-Ups',
    'Air Bike',
    'Arm Circles',
    'Bicycling',
    'Leg Pull-In',
    'Squats',
    'Split Squats',
    'Stomach Vacuum',
    'All Fours Quad Stretch',
    'Legs',
  ];
  const [reps, setReps] = useState(0);
  const [exerciseData, setExerciseData] = useState<Exercise>(() =>
    isValidExercise(exercise) ? exercise : makeNewExercise(user?.uid),
  );
  const [dateTimeField, setDateTimeField] = useState(new Date(exercise?.startTime ?? Date.now()));

  const timer = useTimer();

  useEffect(() => {
    if (isValidExercise(exercise)) {
      setExerciseData(exercise);
    } else if (!isValidExercise(exercise)) {
      setExerciseData(makeNewExercise());
    }
  }, [exercise, isValidExercise, makeNewExercise]);

  const setExerciseField = <key extends keyof Exercise>(key: key, value: Exercise[key]) => {
    setExerciseData({ ...exerciseData, [key]: value });
    if (key === 'startTime') {
      setDateTimeField(new Date(value as string));
    }
  };

  const handleUpdateorCreate = (exercise: Exercise) => {
    const data = { ...exercise, duration: { ...timer.elapsedTime } };
    timer.reset();

    exerciseStore().createOrUpdate(data);
  };

  const resetExercise = () => setExerciseData(makeNewExercise());
  const makeSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    return handleUpdateorCreate(exerciseData);
  };

  const getOperation = (exercise: Exercise) => (!exercise?.id?.length ? 'New' : 'Update');

  if (!exerciseData)
    return (
      <Box>
        <Box>Please select Exercise </Box>
      </Box>
    );
  const exerciseInput = (_date: Date | null, keyboardInputValue?: string) => {

if (_date){
const dateString = _date.toDateString()
  setExerciseField('startTime', dateString)
}
  };
  return (
    <Box sx={{ padding: 10, 'background-color': '#e8fffa;', overflow: 'hidden' }}>
      <form className='flex-column padding ' onSubmit={makeSubmitHandler}>
        <Stack spacing={5}>
          <h2>
            <span className='newExerciseTitle'>{getOperation(exerciseData)}</span> Exercise{' '}
            <span className='ExerciseType'>{exerciseData.type}</span>
            <span>Date {exerciseData.startTime}</span>
          </h2>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              id='exerciseTypeInput'
              disableClearable
              options={workoutOptions}
              selectOnFocus
              value={exerciseData?.type ?? ''}
              onChange={(event, newValue) => setExerciseField('type', newValue)}
              renderInput={params => (
                <TextField
                  {...params}
                  value={exerciseData?.type}
                  label='Type workout here'
                  onChange={event => setExerciseField('type', event.target.value)}
                />
              )}
            />
          </FormControl>

          <Box component='span' sx={{ display: 'block', 'margin-bottom': '40px' }}>
            <Button variant='text' color='primary' type='submit'>
              {getOperation(exerciseData)}
            </Button>

            <Button variant='text' color='primary' onClick={() => timer.startOrPause()}>
              {timer.stateLabel}
            </Button>

            <Button variant='text' color='primary' onClick={() => timer.reset()}>
              reset
            </Button>

            <TextField
              id='elapsedTime'
              label={`Elapsed time ${timer.isRunning ? 'Running' : 'Stopped'}`}
              inputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 30 } }}
              value={`${timer.elapsedTime.value} ${timer.elapsedTime.timeUnit}`}
              color='primary'
              disabled
              size='small'
              sx={{ mb: '1.4rem' }}
            />

            <Autocomplete
              freeSolo
              id='exerciseRepsInput'
              disableClearable
              options={setOrReps}
              selectOnFocus
              value={exerciseData.type}
              sx={{ width: '150px', mb: '1.4rem' }}
              onChange={(event, newValue) => {
                if (!Number.isNaN(newValue)) setReps(Number(newValue));
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label='Enter reps'
                  type='number'
                  onChange={event => event.target.value && setReps(parseInt(event.target.value, 10))}
                />
              )}
            />

           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label='Date&Time picker'
                value={dayjs(exerciseData.startTime)}
                onChange={exerciseInput}
                renderInput={(params: {}) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id='calories'
              label='Calories per rep'
              value={exerciseData?.calories ?? -1}
              type='number'
              onChange={e => setExerciseField('calories', Number(e.target.value))}
            />
            <IconButton
              aria-label='add a rep to workout'
              onClick={() =>
                setExerciseField('reps', [
                  ...(exerciseData.reps || []),
                  { number: reps, startTime: exerciseData.startTime },
                ] as Rep[])
              }
            >
              <AddCircleOutlineRounded />
            </IconButton>
            <Box>
              <Button variant='outlined' color='primary' onClick={resetExercise}>
                reset
              </Button>
            </Box>
          </Box>

          <Stack className='reps-and-video' display='flex' direction='row' gap={4}>
            <Box>
              <ol>
                <Stack direction='column' rowGap={1}>
                  {exerciseData.reps.map((_rep, index) => (
                    <li key={(_rep?.startTime ?? new Date().toISOString()) + '__' + index}>
                      {new Date(_rep.startTime).toLocaleDateString()} {_rep.number}
                    </li>
                  ))}
                </Stack>
              </ol>
            </Box>

            <Box className='embedded-video-yt'>
              {!exerciseData?.type && <span>No exercise type selected</span>}

              {exerciseData.type && (
                <iframe
                  width='1026'
                  height='577'
                  src={videoSources[exerciseData.type]}
                  title='Exercise Videos- Sit Up'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default ExerciseDetails;
