import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';
import { ZefReactiveComponent } from './app.utils';
import { differenceInMinutes } from 'date-fns';
import {
  selectFilteredTodos,
  selectLomakar,
  selectShowOnlyCompleted,
  selectTodos,
  selectTodosCount,
  Todo,
  TodoBase,
  TodosActions
} from './todos';

@Component({
  selector: 'zeropsboost-ngrx',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ZefReactiveComponent {

  // # Event Streams
  onAdd$ = new Subject<TodoBase>();
  onUpdate$ = new Subject<{ id: number; data: Partial<TodoBase>; }>();
  onDelete$ = new Subject<number>();
  onToggleShowCompleted$ = new Subject<void>();
  onLomakar$ = new Subject<string>();

  // # Data
  // -- async
  todos$ = this._store$.pipe(select(selectTodos));
  filteredTodos$ = this._store$.pipe(select(selectFilteredTodos));
  todosCount$ = this._store$.pipe(select(selectTodosCount));
  showOnlyCompleted$ = this._store$.pipe(select(selectShowOnlyCompleted));
  showTodosWarning$ = this.todos$.pipe(map((todos) => !!todos.find(
    (itm) => (
      itm.completed === false
      && differenceInMinutes(new Date(), new Date(itm.created)) >= 10
    ))
  ));
  lomakar$ = this._store$.pipe(select(selectLomakar));

  // # State resolver
  state = this.$connect({
    filteredTodos: this.filteredTodos$,
    todosCount: this.todosCount$,
    showTodosWarning: this.showTodosWarning$,
    showOnlyCompleted: this.showOnlyCompleted$,
    selectLomakar: this.lomakar$
  });

  // # Action Streams
  private _addAction$ = this.onAdd$.pipe(map((data) => TodosActions.add({ data })));
  private _updateAction$ = this.onUpdate$.pipe(map((data) => TodosActions.update(data)));
  private _deleteAction$ = this.onDelete$.pipe(map((id) => TodosActions.delete({ id })));
  private _toggleShowCompletedAction$ = this.onToggleShowCompleted$.pipe(
    map(TodosActions.toggleShowCompleted
  ));
  private _lomakarAction$ = this.onLomakar$.pipe(
    map((text) => TodosActions.lomakar({ text })));

  constructor(private _store$: Store) {
    super();

    // # Dispatcher
    this.$dispatchActions([
      this._addAction$,
      this._updateAction$,
      this._deleteAction$,
      this._toggleShowCompletedAction$,
      this._lomakarAction$
    ]);

  }

  trackById(_: number, item: Todo) {
    return item.id;
  }

}
