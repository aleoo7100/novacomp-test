import {createReducer} from '@reduxjs/toolkit';
import {ListState} from '../types/listTypes';
import {setList} from '../actions/listActions';

const initialState: ListState = {
  list: [],
};

const listReducer = createReducer(initialState, builder => {
  builder.addCase(setList, (state, action) => {
    state.list = action.payload;
  });
});

export default listReducer;
