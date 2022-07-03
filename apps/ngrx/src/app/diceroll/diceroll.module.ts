import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { DicerollComponent } from './diceroll.component';
import { FEATURE_NAME } from './diceroll.constant';
import { dicerollReducer } from './diceroll.reducer';

@NgModule({
  declarations: [ DicerollComponent ],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, dicerollReducer)
  ],
  exports: [ DicerollComponent ]
})
export class DicerollModule {

}
