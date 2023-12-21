import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTabNav} from 'navigation/MainTabNav';
import React, {useCallback, useContext} from 'react';
import {Button, ThemeContext} from 'react-native-elements';
import {TodoForm} from 'screens';

const CloseButton: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const onClose = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Button
      type="clear"
      icon={<Ionicons name="md-close" color={theme.colors?.primary} size={30} />}
      onPress={onClose}
    />
  );
};

const nav = createStackNavigator();
export const AuthedStackNav: React.FC = () => {
  return (
    <nav.Navigator screenOptions={{headerShown: false, presentation: 'modal'}} initialRouteName="Main">
      <nav.Screen name="Main" component={MainTabNav} />
      <nav.Screen
        name="TodoForm"
        component={TodoForm}
        options={{
          headerShown: true,
          headerLeft: () => undefined,
          headerRight: () => <CloseButton />,
          headerTransparent: true,
        }}
      />
    </nav.Navigator>
  );
};