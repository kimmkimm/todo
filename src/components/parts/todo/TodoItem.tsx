import React, {useCallback} from 'react';
import {Alert, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {TodoService} from 'services';

interface Props {
  id: number;
  text: string;
  completed: boolean;
  processing: boolean;
  toggleTodoCompletion: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({id, text, completed, toggleTodoCompletion, processing, removeTodo}) => {
  const onToggle = useCallback(() => toggleTodoCompletion(id), [id, toggleTodoCompletion]);
  const onRemove = useCallback(() => removeTodo(id), [id, removeTodo]);

  return (
    <View style={styles.item}>
      <View style={styles.todo}>
        <CheckBox title={text} checked={completed} containerStyle={styles.checkbox} onPress={onToggle} />
        <Button onPress={onRemove} title="削除" />
      </View>
      {processing && (
        <View style={styles.processing}>
          <ActivityIndicator animating={processing} size="large" color="white" style={styles.indicator} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    marginBottom: 10,
  },
  todo: {
    flexGrow: 1,
    flexShrink: 1,
  },
  processing: {
    flex: 1,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    zIndex: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexGrow: 1,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});