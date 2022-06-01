import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo, TodoBase } from './todos.models';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'init': emptyProps(),

    'get all': emptyProps(),
    'get all success': props<{ data: Todo[]; }>(),
    'get all fail': emptyProps(),

    'add': props<{ data: TodoBase; }>(),
    'add success': props<{ data: Todo; }>(),
    'add fail': emptyProps(),

    'update': props<{ data: Partial<TodoBase>; id: number; }>(),
    'update success': props<{ data: Partial<Todo>; id: number; }>(),
    'update fail': emptyProps(),

    'delete': props<{ id: number; }>(),
    'delete success': props<{ id: number; }>(),
    'delete fail': emptyProps(),

    'toggle show completed': emptyProps()
  },
});
