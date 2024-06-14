import React from 'react';
import {FlatList} from 'react-native';
import {Button, Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {BlankSpace} from '../../components/Layout';
import useTasks from '../../hooks/useTasks';
import NewTaskModal from './NewTaskModal';
import RemoveDialog from '../../components/RemoveDialog';

export default function TasksScreen() {
  const {
    tasks,
    modalVisible,
    setModalVisible,
    handleAddTask,
    handleRemoveTask,
    taskToDelete,
    setTaskToDelete,
  } = useTasks();

  return (
    <Container>
      <Button mode="contained" onPress={() => setModalVisible(true)}>
        Nueva tarea
      </Button>
      <BlankSpace height={20} />
      <FlatList
        data={tasks}
        ItemSeparatorComponent={() => <BlankSpace height={10} />}
        ListEmptyComponent={() => <Card.Title title="No hay elementos" />}
        renderItem={({item}) => (
          <Card onLongPress={() => setTaskToDelete(item.id)}>
            <Card.Title title={item.description} />
          </Card>
        )}
      />
      <NewTaskModal
        visible={modalVisible}
        hideModal={() => setModalVisible(false)}
        addTask={handleAddTask}
      />
      <RemoveDialog
        id={taskToDelete}
        cancel={() => setTaskToDelete(undefined)}
        remove={handleRemoveTask}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
