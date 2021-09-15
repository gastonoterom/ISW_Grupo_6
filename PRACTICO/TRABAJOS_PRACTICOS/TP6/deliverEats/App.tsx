import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { MainStackNavigator } from './src/navigator/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};
