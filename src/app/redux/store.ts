import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from '../../features/slices/exercisesSlice';
import userReducer from '../../features/slices/userSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    exercises: exerciseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// // import { agentApi } from 'common/api/agentApi';
// // import { authApi } from 'common/api/authApi';
// // import { userApi } from 'common/api/userApi';
// import exercisesReducer from '../../features/slices/exercisesSlice';
// import userReducer from '../../features/slices/userSlice';

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export const createAppStore = () =>
//   configureStore({
//     reducer: {
//         user: userReducer,
//         exercises: exercisesReducer,
//     //   [agentApi.reducerPath]: agentApi.reducer,
//     //   [authApi.reducerPath]: authApi.reducer,
//     //   [userApi.reducerPath]: userApi.reducer,
//     },

//     // middleware: getDefaultMiddleware =>
//     //   getDefaultMiddleware().concat(agentApi.middleware, authApi.middleware, userApi.middleware),

//     // ...options,
//   });

// export const store = createAppStore();

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
