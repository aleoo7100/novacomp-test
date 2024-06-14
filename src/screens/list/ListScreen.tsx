import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {BlankSpace} from '../../components/Layout';
import useList from '../../hooks/useList';
import Loading from '../../components/Loading';

export default function ListScreen() {
  const {list, isLoading} = useList();

  if (isLoading) {
    return <Loading testID="loadingId" />;
  }

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <BlankSpace height={10} />}
        ListEmptyComponent={() => <Card.Title title="No hay elementos" />}
        renderItem={({item}) => (
          <Card>
            <Card.Title title={item.name} />
          </Card>
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
