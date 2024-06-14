import store from './reduxStore';
import {ADD_TASK} from './types/taskTypes';

describe('Redux Store', () => {
  it('should configure the store correctly', () => {
    const expectedReducers = ['tasks', 'list'];
    const actualReducers = Object.keys(store.getState());
    expect(actualReducers).toEqual(expectedReducers);
  });

  it('should handle initial state for tasks', () => {
    const state = store.getState();
    expect(state.tasks).toEqual({tasks: []});
  });

  it('should handle initial state for list', () => {
    const state = store.getState();
    expect(state.list).toEqual({list: []});
  });

  it('should dispatch actions correctly', () => {
    const task = {id: '1', description: 'Test Task'};
    store.dispatch({type: ADD_TASK, payload: task});
    const state = store.getState();
    expect(state.tasks.tasks).toContainEqual(task);
  });
});
