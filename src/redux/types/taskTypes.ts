export interface Task {
  id: string;
  description: string;
}

export interface TaskState {
  tasks: Task[];
}

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
