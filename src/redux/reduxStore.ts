import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import listReducer from './reducers/listReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
