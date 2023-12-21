import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TodoBoard} from 'screens';

const nav = createStackNavigator();
export const TodoStackNav: React.FC = () => (
  <nav.Navigator initialRouteName="TodoBoard">
    <nav.Screen
      name="TodoBoard"
      component={TodoBoard}
      options={{
        headerTitle: 'Todoアプリ',
      }}
    />
  </nav.Navigator>
);