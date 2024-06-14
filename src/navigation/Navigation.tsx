import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import TasksScreen from '../screens/tasks/TasksScreen';
import ListScreen from '../screens/list/ListScreen';

const Stack = createNativeStackNavigator<StackParamListType>();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{title: 'Tareas'}}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{title: 'Lista'}}
      />
    </Stack.Navigator>
  );
}

export type StackParamListType = {
  Home: undefined;
  Tasks: undefined;
  List: undefined;
};
