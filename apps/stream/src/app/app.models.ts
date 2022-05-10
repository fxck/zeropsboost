export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  created: string;
}

export interface State {
  todos: Todo[];
  showOnlyCompleted: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}
