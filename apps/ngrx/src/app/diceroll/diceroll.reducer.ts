import { createReducer, on } from '@ngrx/store';
import { DicerollActions } from './diceroll.actions';
import { DicerollState } from './diceroll.models';

const initialState: DicerollState = {
  score: {
    one: 0,
    two: 0
  },
  lastRoll: undefined,
  currentPot: 0,
  currentPlayer: 'one'
};

const roll = (state: DicerollState) => {
  return state;
};

const hold = (state: DicerollState) => {
  return state;
};

export const dicerollReducer = createReducer(
  initialState,
  on(DicerollActions.roll, roll),
  on(DicerollActions.hold, hold),
  on(DicerollActions.reset, () => initialState)
);
