import {addTask, removeTask} from '../actions/taskActions';
import {ADD_TASK, REMOVE_TASK, Task} from '../types/taskTypes';

describe('Task Actions', () => {
  it('should create an action to add a task', () => {
    const task: Task = {id: '1', description: 'New Task'};
    const expectedAction = {
      type: ADD_TASK,
      payload: task,
    };
    expect(addTask(task)).toEqual(expectedAction);
  });

  it('should create an action to remove a task', () => {
    const taskId = '1';
    const expectedAction = {
      type: REMOVE_TASK,
      payload: taskId,
    };
    expect(removeTask(taskId)).toEqual(expectedAction);
  });
});
