import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME } from './todos.constant';
import { TodosEffect } from './todos.effect';
import { todosReducer } from './todos.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, todosReducer),
    EffectsModule.forFeature([ TodosEffect ])
  ],
})
export class TodosModule {

}
