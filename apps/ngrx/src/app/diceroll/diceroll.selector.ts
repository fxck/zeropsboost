import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './diceroll.constant';
import { DicerollState, Players } from './diceroll.models';

export const selectDicerollState = createFeatureSelector<DicerollState>(FEATURE_NAME);

export const selectPlayerOneScore = createSelector(
  selectDicerollState,
  (s) => s.score[Players.One]
);

export const selectPlayerTwoScore = createSelector(
  selectDicerollState,
  (s) => s.score[Players.Two]
);

export const selectCurrentPot = createSelector(
  selectDicerollState,
  (s) => s.currentPot
);

export const selectCurrentPlayer = createSelector(
  selectDicerollState,
  (s) => s.currentPlayer
);

export const selectLastRoll = createSelector(
  selectDicerollState,
  (s) => s.lastRoll
);
