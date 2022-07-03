import { createReducer } from '@ngrx/store';
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

export const dicerollReducer = createReducer(
  initialState
);
