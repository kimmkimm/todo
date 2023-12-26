import {TodosApi, config} from 'backend';

const todosApi = new TodosApi(config);

export type {Todo} from 'backend';

const getTodos = async () => {
  return await todosApi.getTodos();
};

const postTodo = async (text: string) => {
  return await todosApi.postTodo({newTodo: {text}});
};

const putTodo = async (id: number, completed: boolean) => {
  return await todosApi.putTodo({todoId: id, todoStatus: {completed}});
};

export const TodoService = {
  getTodos,
  postTodo,
  putTodo,
};
