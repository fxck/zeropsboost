import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './todos.constant';
import { TodosState } from './todos.models';

export const todosState = createFeatureSelector<TodosState>(FEATURE_NAME);

export const selectTodos = createSelector(
  todosState,
  (state) => state.items
);

export const selectShowOnlyCompleted = createSelector(
  todosState,
  (state) => state.showOnlyCompleted
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectShowOnlyCompleted,
  (todos, showOnlyCompleted) => showOnlyCompleted
    ? todos.filter((itm) => itm.completed)
    : todos
);

export const selectTodosCount = createSelector(
  selectTodos,
  (todos) => todos.reduce(
    (obj, itm) => {
      if (itm.completed) { obj.completed++; }
      obj.all++;
      return obj;
    },
    { completed: 0, all: 0 }
  )
);

export const selectLomakar = createSelector(
  todosState,
  (state) => state.lomakar
);
