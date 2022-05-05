import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [ TodosComponent ],
  imports: [
    CommonModule,
    TodoItemModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ TodosComponent ]
})
export class TodosModule {}
