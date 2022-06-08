import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan, map, tap } from 'rxjs/operators';
import { Action, State, Todo } from './app.models';
import { HttpClient } from '@angular/common/http';
import {
  countTodos,
  selectFilteredTodos,
  selectShowOnlyCompleted,
  todosStateReducer,
} from './app.utils';
import { differenceInMinutes } from 'date-fns';

const INITIAL_STATE: State = {
  showOnlyCompleted: false,
  todos: []
};

@Component({
  selector: 'zeropsboost-stream',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // stream of Action { type: string; payload?: any }
  actions$ = new BehaviorSubject<Action>({ type: 'initial-action' });

  // main State with { selectShowOnlyCompleted: boolean; todos: Todo[] }
  state$ = this.actions$.pipe(scan(todosStateReducer, INITIAL_STATE));

  // stream with only `selectShowOnlyCompleted`
  showOnlyCompleted$ = this.state$.pipe(map(selectShowOnlyCompleted));

  // stream with only `todos`, internally filtered depeding on `selectShowOnlyCompleted`
  todos$ = this.state$.pipe(map(selectFilteredTodos));

  todosWarning$ = this.state$.pipe(
    map((state) => !!state.todos.find(
      (itm) => itm.completed === false && differenceInMinutes(new Date(), new Date(itm.created)) >= 10
    ))
  );

  // stream of an object with { completed: number; all: number; }
  // starting from state$, because todos$ might be affected by completed filter
  todosCount$ = this.state$.pipe(map(({ todos }) => countTodos(todos)));

  constructor(private _http: HttpClient) {
    this._http
      .get('http://localhost:3333/api/todos')
      .subscribe((res) => this.actions$.next({ type: 'get-todos', payload: res }));

  }

  trackById(_: number, item: Todo) {
    return item.id;
  }
}
