import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {UserSetting} from 'screens';

const nav = createStackNavigator();
export const SettingsStackNav: React.FC = () => (
  <nav.Navigator screenOptions={{headerShown: false}} initialRouteName="UserSetting">
    <nav.Screen name="UserSetting" component={UserSetting} />
  </nav.Navigator>
);