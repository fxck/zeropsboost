import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { TodosModule } from './todos';
import { ZefAppInjector } from './app.utils';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers: [
      (reducer: any) => storeLogger({ collapsed: true })(reducer)
    ]}),
    EffectsModule.forRoot(),
    TodosModule
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
