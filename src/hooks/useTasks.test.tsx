import React, {ReactNode} from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useDispatch, Provider} from 'react-redux';
import useTasks from '../hooks/useTasks';
import {addTask, removeTask} from '../redux/actions/taskActions';
import {v4 as uuidv4} from 'uuid';
import reduxStore from '../redux/reduxStore';

jest.mock('uuid');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

describe('useTasks hook', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatch);
  });

  it('should initialize with default values', () => {
    const {result} = renderHook(() => useTasks(), {
      wrapper: Wrapper,
    });

    expect(result.current.tasks).toEqual([]);
    expect(result.current.modalVisible).toBe(false);
    expect(result.current.taskToDelete).toBeUndefined();
  });

  it('should handle setting modal visibility', () => {
    const {result} = renderHook(() => useTasks(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setModalVisible(true);
    });

    expect(result.current.modalVisible).toBe(true);
  });

  it('should handle adding a task', () => {
    (uuidv4 as jest.Mock).mockReturnValue('1234');
    const {result} = renderHook(() => useTasks(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.handleAddTask('Test Task');
    });

    expect(dispatch).toHaveBeenCalledWith(
      addTask({id: '1234', description: 'Test Task'}),
    );
  });

  it('should handle removing a task', () => {
    const {result} = renderHook(() => useTasks(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.handleRemoveTask('1234');
    });

    expect(dispatch).toHaveBeenCalledWith(removeTask('1234'));
  });

  it('should handle setting task to delete', () => {
    const {result} = renderHook(() => useTasks(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setTaskToDelete('1234');
    });

    expect(result.current.taskToDelete).toBe('1234');
  });
});
