export interface TodosState {
  items: Todo[];
  showOnlyCompleted: boolean;
  lomakar: string;
}

export interface TodoBase {
  text: string;
  completed: boolean;
}

export interface Todo extends TodoBase {
  id: number;
  created: string;
}
