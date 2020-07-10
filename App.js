/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './src/navigation/navigation';
import { store} from './src/redux/store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
    </>
  );
};

export default App;
