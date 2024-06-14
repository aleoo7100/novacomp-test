import listReducer from '../reducers/listReducer';
import {setList} from '../actions/listActions';
import {ListState} from '../types/listTypes';

describe('List Reducer', () => {
  const initialState: ListState = {
    list: [],
  };

  it('should return the initial state', () => {
    expect(listReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle setting a list', () => {
    const list = [
      {id: '1', name: 'Item 1', avatar: 'avatar1.png', createdAt: '2023-01-01'},
      {id: '2', name: 'Item 2', avatar: 'avatar2.png', createdAt: '2023-01-02'},
    ];
    const action = setList(list);
    const expectedState = {list};
    expect(listReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setting an empty list', () => {
    const list: ListState['list'] = [];
    const action = setList(list);
    const expectedState = {list};
    expect(listReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setting a list with a single item', () => {
    const list = [
      {
        id: '1',
        name: 'Single Item',
        avatar: 'avatar1.png',
        createdAt: '2023-01-01',
      },
    ];
    const action = setList(list);
    const expectedState = {list};
    expect(listReducer(initialState, action)).toEqual(expectedState);
  });
});
