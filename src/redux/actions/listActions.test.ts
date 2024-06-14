import {setList} from '../actions/listActions';
import {ListItem, SET_LIST} from '../types/listTypes';

describe('List Actions', () => {
  it('should create an action to set a list', () => {
    const list: ListItem[] = [
      {id: '1', name: 'Item 1', avatar: 'avatar1.png', createdAt: '2023-01-01'},
      {id: '2', name: 'Item 2', avatar: 'avatar2.png', createdAt: '2023-01-02'},
    ];
    const expectedAction = {
      type: SET_LIST,
      payload: list,
    };
    expect(setList(list)).toEqual(expectedAction);
  });

  it('should handle setting an empty list', () => {
    const list: ListItem[] = [];
    const expectedAction = {
      type: SET_LIST,
      payload: list,
    };
    expect(setList(list)).toEqual(expectedAction);
  });

  it('should handle setting a list with a single item', () => {
    const list: ListItem[] = [
      {
        id: '1',
        name: 'Single Item',
        avatar: 'avatar1.png',
        createdAt: '2023-01-01',
      },
    ];
    const expectedAction = {
      type: SET_LIST,
      payload: list,
    };
    expect(setList(list)).toEqual(expectedAction);
  });
});
