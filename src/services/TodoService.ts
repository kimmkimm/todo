export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const todos: Todo[] = [
  {
    id: 0,
    text: '洗濯物をたたむ',
    completed: false,
  },
  {
    id: 1,
    text: '食器を洗う',
    completed: false,
  },
  {
    id: 2,
    text: 'ゴミを出す',
    completed: false,
  },
  {
    id: 3,
    text: '風呂掃除',
    completed: false,
  },
  {
    id: 4,
    text: 'パンを買いに行く',
    completed: false,
  },
  {
    id: 5,
    text: '電球をかえる',
    completed: false,
  },
  {
    id: 6,
    text: '塾の送り迎え',
    completed: false,
  },
  {
    id: 7,
    text: 'ご飯を炊く',
    completed: false,
  },
];
let id = 7;

const getTodos = async () => {
  // 新しい配列オブジェクトとして返却する
  return Promise.resolve([...todos]);
};

const postTodo = async (text: string) => {
  id++;
  const todo: Todo = {
    id,
    text,
    completed: false,
  };
  todos.push(todo);
  return Promise.resolve(todo);
};

const putTodo = async (id: number, completed: boolean) => {
  const target = todos.find(todo => todo.id === id);
  if (!target) {
    return Promise.reject(new Error('not found'));
  }
  target.completed = completed;
  return Promise.resolve(target);
};

export const TodoService = {
  getTodos,
  postTodo,
  putTodo,
};