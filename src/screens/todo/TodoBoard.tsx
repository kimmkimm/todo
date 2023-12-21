import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {FilterType, TodoFilter, TodoList} from 'components/parts';
import React, {useCallback, useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Icon, ThemeContext} from 'react-native-elements';
import {Todo, TodoService} from 'services';

type ShowFilter = {
  [K in FilterType]: (todo: Todo) => boolean;
};

const showFilter: ShowFilter = {
  [FilterType.ALL]: () => true,
  [FilterType.INCOMPLETE]: todo => !todo.completed,
  [FilterType.COMPLETED]: todo => todo.completed,
};

export const TodoBoard: React.FC = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);

  useFocusEffect(
    useCallback(() => {
    let isActive = true;

    TodoService.getTodos()
      .then(response => {
        if (isActive) {
          setTodos(response);
        }
      })
      .catch(() => {});

    return () => {
      isActive = false;
    };
    }, []),
  );

  const toggleTodoCompletion = (id: number) => {
    const target = todos.find(todo => todo.id === id);
    if (!target) {
      return;
    }
    TodoService.putTodo(id, !target.completed)
      .then(returnedTodo =>
        setTodos(prevTodos => {
          return prevTodos.map(todo => (todo.id === id ? returnedTodo : todo));
        }),
      )
      .catch(() => {});
  };

  const removeTodo = (id: number) => {
    Alert.alert('未実装です');
  };

  const showTodos = todos.filter(showFilter[filterType]);

  return (
    <View style={styles.container} testID="screen/main/home">
      <TodoFilter filterType={filterType} setFilterType={setFilterType} />
      <TodoList
        todos={showTodos}
        contentContainerStyle={styles.todoListContainer}
        toggleTodoCompletion={toggleTodoCompletion}
        removeTodo={removeTodo}
      />
      <Icon
        name="plus"
        type="font-awesome-5"
        color={theme.colors?.primary}
        reverse
        size={30}
        containerStyle={styles.iconContainerStyle}
        onPress={() => {
          navigation.navigate('TodoForm');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoListContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 80,
  },
  iconContainerStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});