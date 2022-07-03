import { createActionGroup, emptyProps } from '@ngrx/store';

export const DicerollActions = createActionGroup({
  source: 'Diceroll',
  events: {
    'roll': emptyProps(),
    'hold': emptyProps(),
    'reset': emptyProps()
  }
});
