import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosAddModule } from './todo-add/todo-add.module';
import { TodosModule } from '@zeropsboost/ui/todos';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, TodosModule, TodosAddModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
