import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {SettingsStackNav} from './SettingsStackNav';
import {TodoStackNav} from './TodoStackNav';

const nav = createBottomTabNavigator();
export const MainTabNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName="Todo">
      <nav.Screen
        name="Todo"
        component={TodoStackNav}
        options={{
          title: 'ホーム',
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
        }}
      />
      <nav.Screen
        name="Settings"
        component={SettingsStackNav}
        options={{
          title: '設定',
          tabBarIcon: ({color}) => <Ionicons name="md-settings" size={30} color={color} />,
        }}
      />
    </nav.Navigator>
  );
};