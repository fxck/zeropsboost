export interface TodoBase {
  text: string;
  completed: boolean;
}

export interface Todo extends TodoBase {
  id: number;
  created: string;
}

