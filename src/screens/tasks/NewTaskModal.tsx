import React, {useState} from 'react';
import {Modal, Portal, Text, TextInput, Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {BlankSpace} from '../../components/Layout';
import {ToastAndroid} from 'react-native';

interface NewTaskModalProps {
  visible: boolean;
  hideModal: () => void;
  addTask: (description: string) => void;
}

export default function NewTaskModal(props: NewTaskModalProps) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      props.addTask(taskDescription);
      setTaskDescription('');
      props.hideModal();
    } else {
      ToastAndroid.show(
        'La descripción no puede estar vacía',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.hideModal}>
        <Conatiner>
          <Title variant="titleLarge">Agregar Nueva Tarea</Title>
          <BlankSpace height={20} />
          <TextInput
            label="Descripción"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <BlankSpace height={20} />
          <ButtonContainer>
            <StyledButton mode="contained" onPress={handleAddTask}>
              Agregar
            </StyledButton>
            <StyledButton mode="outlined" onPress={props.hideModal}>
              Cancelar
            </StyledButton>
          </ButtonContainer>
        </Conatiner>
      </Modal>
    </Portal>
  );
}

const Conatiner = styled.View`
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
`;
const Title = styled(Text)`
  text-align: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  flex: 1;
  margin: 5px;
`;
