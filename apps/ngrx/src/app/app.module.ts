import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { TodosCoreModule } from './todos';
import { DicerollModule } from './diceroll';
import { ZefAppInjector } from './app.utils';
import { TodosModule } from '@zeropsboost/ui/todos';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers: [
      (reducer: any) => storeLogger({ collapsed: true })(reducer)
    ]}),
    EffectsModule.forRoot(),
    TodosCoreModule,
    TodosModule,
    DicerollModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    injector: Injector
  ) {
    // save injector token
    ZefAppInjector.injector = injector;
  }
}
