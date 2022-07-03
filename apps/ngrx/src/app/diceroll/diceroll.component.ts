import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Subject, tap } from 'rxjs';
import { ZefReactiveComponent } from '../app.utils';
import { DicerollActions } from './diceroll.actions';
import { Players } from './diceroll.models';
import {
  selectCurrentPlayer,
  selectCurrentPot,
  selectLastRoll,
  selectPlayerOneScore,
  selectPlayerTwoScore
} from './diceroll.selector';

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

  // # Data
  // -- sync
  players = Players;
  scoreToWin = 100;

  // -- async
  playerOneScore$ = this._store$.pipe(select(selectPlayerOneScore));
  playerTwoScore$ = this._store$.pipe(select(selectPlayerTwoScore));
  currentPot$ = this._store$.pipe(select(selectCurrentPot));
  currentPlayer$ = this._store$.pipe(select(selectCurrentPlayer));
  lastRoll$ = this._store$.pipe(select(selectLastRoll));

  // # State Resolver
  state = this.$connect({
    playerOneScore: this.playerOneScore$,
    playerTwoScore: this.playerTwoScore$,
    currentPot: this.currentPot$,
    currentPlayer: this.currentPlayer$,
    lastRoll: this.lastRoll$
  });

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
