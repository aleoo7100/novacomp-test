import {createReducer} from '@reduxjs/toolkit';
import {TaskState} from '../types/taskTypes';
import {addTask, removeTask} from '../actions/taskActions';

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(removeTask, (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    });
});

export default taskReducer;
