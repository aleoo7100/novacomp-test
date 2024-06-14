import {useState} from 'react';
import {RootState} from '../redux/reduxStore';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, removeTask} from '../redux/actions/taskActions';
import {v4 as uuidv4} from 'uuid';

export default function useTasks() {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (taskDescription: string) => {
    dispatch(addTask({id: uuidv4(), description: taskDescription}));
  };

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  return {
    tasks,
    modalVisible,
    setModalVisible,
    handleAddTask,
    handleRemoveTask,
    taskToDelete,
    setTaskToDelete,
  };
}
