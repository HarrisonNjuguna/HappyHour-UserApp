import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="dark" />
    </Provider>
  );
}