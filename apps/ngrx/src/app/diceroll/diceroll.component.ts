import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';
import { ZefReactiveComponent } from '../app.utils';
import { DicerollActions } from './diceroll.actions';

@Component({
  selector: 'zeropsboost-diceroll',
  templateUrl: './diceroll.component.html',
  styleUrls: [ './diceroll.component.scss' ]
})
export class DicerollComponent extends ZefReactiveComponent {

  // # Event Streams
  onRoll$ = new Subject<void>();
  onHold$ = new Subject<void>();
  onReset$ = new Subject<void>();

  // # Action Streams
  private _rollAction$ = this.onRoll$.pipe(map(DicerollActions.roll));
  private _holdAction$ = this.onHold$.pipe(map(DicerollActions.hold));
  private _deleteAction$ = this.onReset$.pipe(map(DicerollActions.reset));

  constructor(private _store$: Store) {
    super();

    // # Dispatcher
    this.$dispatchActions([
      this._rollAction$,
      this._holdAction$,
      this._deleteAction$
    ]);

  }

}
