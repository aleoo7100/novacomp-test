import {createAction} from '@reduxjs/toolkit';
import {ListItem, SET_LIST} from '../types/listTypes';

export const setList = createAction<ListItem[]>(SET_LIST);
