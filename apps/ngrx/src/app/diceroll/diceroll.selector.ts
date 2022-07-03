import { createFeatureSelector } from '@ngrx/store';
import { FEATURE_NAME } from './diceroll.constant';
import { DicerollState } from './diceroll.models';

export const todosState = createFeatureSelector<DicerollState>(FEATURE_NAME);
