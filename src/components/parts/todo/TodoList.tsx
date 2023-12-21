import React from 'react';
import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Todo} from 'services';

import {TodoItem} from './TodoItem';

interface Props {
  todos: Todo[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  toggleTodoCompletion: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({todos, contentContainerStyle, toggleTodoCompletion, removeTodo}) => {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={contentContainerStyle}
      data={todos}
      renderItem={({item: todo}) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      )}
      keyExtractor={todo => String(todo.id)}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});