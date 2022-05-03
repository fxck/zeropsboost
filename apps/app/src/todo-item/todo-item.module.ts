import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [ TodoItemComponent ],
  imports: [ CommonModule ],
  exports: [ TodoItemComponent ]
})
export class TodoItemModule {}
