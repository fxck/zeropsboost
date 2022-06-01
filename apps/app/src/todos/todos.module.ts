import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodosComponent } from './todos.component';
import { TodoItemModule } from '@zeropsboost/ui/todo-item';

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
