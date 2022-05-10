import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [ TodoItemComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ TodoItemComponent ]
})
export class TodoItemModule {}
