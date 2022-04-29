import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [ TodosComponent ],
  imports: [ CommonModule, TodoItemModule ],
  exports: [ TodosComponent ]
})
export class TodosModule {}
