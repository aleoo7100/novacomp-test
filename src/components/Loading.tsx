import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';

interface LoadingProps {
  testID?: string;
}
export default function Loading(props: LoadingProps) {
  return (
    <Container testID={props.testID}>
      <ActivityIndicator animating={true} size={'large'} />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
