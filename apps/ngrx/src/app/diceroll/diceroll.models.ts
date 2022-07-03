export interface DicerollState {
  score: {
    one: number;
    two: number;
  };
  lastRoll: undefined;
  currentPot: number;
  currentPlayer: 'one' | 'two';
}

