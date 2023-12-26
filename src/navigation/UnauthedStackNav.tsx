import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native-elements';
import {Welcome, Instructions, Login, Add} from 'screens';

const HeaderRight: React.FC = () => {
  const navigation = useNavigation();
  return <Button type="clear" onPress={() => navigation.navigate('Login')} title="ログイン" />;
};

const nav = createStackNavigator();
export const UnauthedStackNav: React.FC = () => {
  return (
    <nav.Navigator
      initialRouteName={Welcome.name}
      screenOptions={{
        headerRight: () => <HeaderRight />,
      }}>
      <nav.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerTitle: 'Welcome',
        }}
      />
      <nav.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'ログイン',
          headerRight: undefined,
        }}
      />
      <nav.Screen
        name="Add"
        component={Add}
        options={{
          headerTitle: 'ユーザー登録',
          headerRight: undefined,
        }}
      />
      <nav.Screen name="Instructions" component={Instructions} />
    </nav.Navigator>
  );
};

