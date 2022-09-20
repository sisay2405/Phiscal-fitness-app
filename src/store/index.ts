import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import exerciseReducer from './exercisesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    exercises: exerciseReducer,
    // extraReducer: (builder) => {
    //   builder.addCase(fetchExercise.fulfilled, (state: Exercise[], { payload }: { payload: Exercise[] }) => {
    //     console.log('extrReducer.fetchExercises.fired');
    //     state = payload;
    //   });
    // },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
