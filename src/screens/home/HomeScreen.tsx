import React from 'react';
import {Button, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {BlankSpace} from '../../components/Layout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from '../../navigation/Navigation';

type ScreenProps = NativeStackScreenProps<StackParamListType, 'Home'>;

export default function HomeScreen({navigation}: ScreenProps) {
  return (
    <Container>
      <CenteredText variant="displayMedium">Bienvenido</CenteredText>
      <CenteredText variant="bodyLarge">Selecciona una acción</CenteredText>
      <BlankSpace height={40} />
      <Button
        testID="taskBtn"
        mode="contained"
        onPress={() => navigation.navigate('Tasks')}>
        Tareas
      </Button>
      <BlankSpace height={20} />
      <Button
        testID="listBtn"
        mode="contained"
        onPress={() => navigation.navigate('List')}>
        Lista
      </Button>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;
`;
const CenteredText = styled(Text)`
  text-align: center;
`;
