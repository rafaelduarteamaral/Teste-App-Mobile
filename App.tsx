import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './src/views/Home';
import Task from './src/views/Task';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar style="auto" />
    </Provider>
  );
}
