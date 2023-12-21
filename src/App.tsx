import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from 'contexts/UserContext';
import {RootStackNav} from 'navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const App = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <UserContextProvider>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </UserContextProvider>
    </GestureHandlerRootView>
  );
};
