import { createReducer, on } from '@ngrx/store';
import { DicerollActions } from './diceroll.actions';
import { DicerollState, Players } from './diceroll.models';

const initialState: DicerollState = {
  score: {
    [Players.One]: 0,
    [Players.Two]: 0
  },
  lastRoll: undefined,
  currentPot: 0,
  currentPlayer: Players.One
};

function _switchPlayer(currentPlayer: Players) {
  if (currentPlayer  === Players.One) {
    return Players.Two;
  }
  return Players.One;
}

const roll = (state: DicerollState) => {
  // random roll between 1 and 6
  const lastRoll = Math.floor(1 + (Math.random() * 6));

  // if current player rolled anything but 1
  // add the roll to the pot
  if (lastRoll !== 1) {
    return {
      ...state,
      lastRoll,
      currentPot: state.currentPot + lastRoll
    };
  }

  // otherwise clear pot and switch player
  return {
    ...state,
    lastRoll,
    currentPot: 0,
    currentPlayer: _switchPlayer(state.currentPlayer)
  };

};

const hold = (state: DicerollState) => {
  // add pot to score of current user
  // and reset pot, switch players
  return {
    ...state,
    score: {
      ...state.score,
      [state.currentPlayer]: state.score[state.currentPlayer] + state.currentPot
    },
    currentPot: 0,
    currentPlayer: _switchPlayer(state.currentPlayer)
  }
};

export const dicerollReducer = createReducer(
  initialState,
  on(DicerollActions.roll, roll),
  on(DicerollActions.hold, hold),
  on(DicerollActions.reset, () => initialState)
);
