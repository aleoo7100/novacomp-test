import taskReducer from '../reducers/taskReducer';
import {addTask, removeTask} from '../actions/taskActions';
import {TaskState, Task} from '../types/taskTypes';

describe('Task Reducer', () => {
  const initialState: TaskState = {
    tasks: [],
  };

  it('should return the initial state', () => {
    expect(taskReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle adding a task', () => {
    const task: Task = {id: '1', description: 'Test Task'};
    const action = addTask(task);
    const expectedState = {tasks: [task]};
    expect(taskReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle removing a task', () => {
    const initialStateWithTasks: TaskState = {
      tasks: [
        {id: '1', description: 'Task 1'},
        {id: '2', description: 'Task 2'},
      ],
    };
    const action = removeTask('1');
    const expectedState = {
      tasks: [{id: '2', description: 'Task 2'}],
    };
    expect(taskReducer(initialStateWithTasks, action)).toEqual(expectedState);
  });

  it('should handle adding multiple tasks', () => {
    const task1: Task = {id: '1', description: 'Test Task 1'};
    const task2: Task = {id: '2', description: 'Test Task 2'};
    const stateAfterFirstTask = taskReducer(initialState, addTask(task1));
    const finalState = taskReducer(stateAfterFirstTask, addTask(task2));
    const expectedState = {tasks: [task1, task2]};
    expect(finalState).toEqual(expectedState);
  });

  it('should handle removing a task that does not exist', () => {
    const initialStateWithTasks: TaskState = {
      tasks: [{id: '1', description: 'Task 1'}],
    };
    const action = removeTask('2');
    const expectedState = {
      tasks: [{id: '1', description: 'Task 1'}],
    };
    expect(taskReducer(initialStateWithTasks, action)).toEqual(expectedState);
  });

  it('should handle removing a task from an empty state', () => {
    const action = removeTask('1');
    const expectedState = {tasks: []};
    expect(taskReducer(initialState, action)).toEqual(expectedState);
  });
});
