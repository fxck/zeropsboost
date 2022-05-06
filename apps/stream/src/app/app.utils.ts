import { Action, State, Todo } from './app.models';

export function todosStateReducer(state: State, action: Action): State {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'add-todo':
      return addTodo(state, action.payload);

    case 'update-todo':
      return updateTodo(state, action.payload);

    case 'remove-todo':
      return removeTodo(state, action.payload);

    case 'mark-all-completed':
      return markAllTodosCompleted(state);

    case 'toggle-completed-only':
      return {
        ...state,
        showOnlyCompleted: !state.showOnlyCompleted,
      };
    default:
      return state
  }
}

export function selectShowOnlyCompleted({ showOnlyCompleted }: State) {
  return showOnlyCompleted;
}

export function selectFilteredTodos({ todos, showOnlyCompleted }: State) {
  return showOnlyCompleted
    ? todos.filter((itm) => itm.completed === true)
    : todos;
}

export function countTodos(todos: Todo[]) {
  return todos.reduce(
    (obj, itm) => {
      obj.all++;
      if (itm.completed) {
        obj.completed++;
      }
      return obj;
    },
    { completed: 0, all: 0 }
  );
}

export function markAllTodosCompleted(state: State) {
  return {
    ...state,
    todos: state.todos.map((itm) => ({ ...itm, completed: true })),
  };
}

export function addTodo(state: State, payload: Partial<Todo>) {
  return {
    ...state,
    todos: [
      ...state.todos,
      {
        ...payload,
        id: Date.now(),
      },
    ] as Todo[],
  };
}

export function removeTodo(state: State, id: number) {
  return {
    ...state,
    todos: state.todos.filter((itm) => itm.id !== id),
  };
}

export function updateTodo(
  state: State,
  payload: { id: number; data: Partial<Todo> }
) {
  return {
    ...state,
    todos: state.todos.map((itm) => {
      if (itm.id !== payload.id) {
        return itm;
      }

      return {
        ...itm,
        ...payload.data,
      };
    }),
  };
}
