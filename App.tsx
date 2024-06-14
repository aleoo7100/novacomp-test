import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import Navigation from './src/navigation/Navigation';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/reduxStore';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
