import {useUserContext} from 'contexts/UserContext';
import React, {useCallback} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

export const UserSetting: React.FC = () => {
  const userContext = useUserContext();

  const onLogout = useCallback(() => {
    Alert.alert('ログアウト確認', 'ログアウトします。\nよろしいですか？', [
      {text: 'Cancel', style: 'cancel', onPress: () => {}},
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => userContext.logout(),
      },
    ]);
  }, [userContext]);

  return (
    <View style={styles.container}>
      <Button type="clear" onPress={onLogout} title="ログアウト" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});