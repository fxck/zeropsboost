import { createReducer, on } from '@ngrx/store';
import { TodosActions } from './todos.actions';
import { Todo, TodosState } from './todos.models';

const initialState: TodosState = {
  items: [],
  showOnlyCompleted: false,
  lomakar: ''
};

const addTodo = (state: TodosState, data: Todo) => ({
  ...state,
  items: [ ...state.items, data ]
});

const removeTodo = (state: TodosState, id: number) => ({
  ...state,
  items: state.items.filter((itm) => itm.id !== id),
});

const updateTodo = (
  state: TodosState,
  data: { id: number; data: Partial<Todo> }
) => ({
  ...state,
  items: state.items.map((itm) => {
    if (itm.id !== data.id) { return itm; }
    return { ...itm, ...data.data };
  })
});

const getAllTodos = (state: TodosState, items: Todo[]) => ({
  ...state,
  items
});

const toggleShowCompleted = (state: TodosState) => ({
  ...state,
  showOnlyCompleted: !state.showOnlyCompleted
});

const setLomakar = (state: TodosState, text: string) => ({
  ...state,
  lomakar: text
})

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.addSuccess, (state, { data }) => addTodo(state, data)),
  on(TodosActions.updateSuccess, (state, data) => updateTodo(state, data)),
  on(TodosActions.deleteSuccess, (state, { id }) => removeTodo(state, id)),
  on(TodosActions.getAllSuccess, (state, { data }) => getAllTodos(state, data)),
  on(TodosActions.toggleShowCompleted, (state) => toggleShowCompleted(state)),
  on(TodosActions.lomakar, (state, { text }) => setLomakar(state, text))
);
