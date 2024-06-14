import {createAction} from '@reduxjs/toolkit';
import {Task, ADD_TASK, REMOVE_TASK} from '../types/taskTypes';

export const addTask = createAction<Task>(ADD_TASK);
export const removeTask = createAction<string>(REMOVE_TASK);
