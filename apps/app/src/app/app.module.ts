import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { TodosModule } from '../todos/todos.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HttpClientModule, MatSliderModule, TodosModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
