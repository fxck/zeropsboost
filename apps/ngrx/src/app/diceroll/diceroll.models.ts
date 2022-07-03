export interface DicerollState {
  score: {
    one: number;
    two: number;
  };
  lastRoll: number | undefined;
  currentPot: number;
  currentPlayer: Players;
}

export enum Players {
  One = 'one',
  Two = 'two'
}
