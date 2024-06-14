import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {useDispatch, Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import useList from '../hooks/useList';
import {setList} from '../redux/actions/listActions';
import axios from 'axios';
import {RootState} from '../redux/reduxStore';

jest.mock('axios');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore<RootState>([]);
const initialState: RootState = {
  tasks: {
    tasks: [],
  },
  list: {
    list: [],
  },
};

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  const store = mockStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

describe('useList hook', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatch);
  });

  it('should initialize with default values', () => {
    const {result} = renderHook(() => useList(), {
      wrapper: Wrapper,
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.list).toEqual([]);
  });

  it('should handle fetch error', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

    const {result, waitForNextUpdate} = renderHook(() => useList(), {
      wrapper: Wrapper,
    });

    await waitForNextUpdate();

    expect(axios.get).toHaveBeenCalledWith(
      'https://6172cfe5110a740017222e2b.mockapi.io/elements',
    );
    expect(dispatch).not.toHaveBeenCalledWith(setList(expect.anything()));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.list).toEqual([]);
  });
});
