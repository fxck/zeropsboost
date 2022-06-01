import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodosActions } from './todos.actions';
import { TodosApi } from './todos.api';

@Injectable()
export class TodosEffect {

  onInit$ = createEffect(() => this._actions$.pipe(
    ofType(TodosActions.init),
    map(() => TodosActions.getAll())
  ));

  onGetAll$ = createEffect(() => this._actions$.pipe(
    ofType(TodosActions.getAll),
    switchMap(() => this._api
      .getAll$()
      .pipe(
        map((data) => TodosActions.getAllSuccess({ data })),
        catchError(() => of(TodosActions.getAllFail()))
      )
  )));

  onAdd$ = createEffect(() => this._actions$.pipe(
    ofType(TodosActions.add),
    switchMap(({ data }) => this._api
      .add$(data)
      .pipe(
        map((data) => TodosActions.addSuccess({ data })),
        catchError(() => of(TodosActions.addFail()))
      )
  )));

  onUpdate$ = createEffect(() => this._actions$.pipe(
    ofType(TodosActions.update),
    switchMap(({ data, id }) => this._api
      .update$(id, data)
      .pipe(
        map((data) => TodosActions.updateSuccess({ data, id })),
        catchError(() => of(TodosActions.updateFail()))
      )
  )));

  onDelete$ = createEffect(() => this._actions$.pipe(
    ofType(TodosActions.delete),
    switchMap(({ id }) => this._api
      .delete$(id)
      .pipe(
        map(() => TodosActions.deleteSuccess({ id })),
        catchError(() => of(TodosActions.deleteFail()))
      )
  )));

  constructor(
    private _actions$: Actions,
    private _api: TodosApi
  ) { }

  ngrxOnInitEffects() {
    return TodosActions.init();
  }

}
