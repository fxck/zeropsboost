import { NgModule } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [ TodoItemComponent ],
  exports: [ TodoItemComponent ]
})
export class TodoItemModule {}
