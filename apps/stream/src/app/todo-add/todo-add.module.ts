import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoAddComponent } from './todo-add.component';

@NgModule({
  declarations: [ TodoAddComponent ],
  imports: [CommonModule],
  exports: [ TodoAddComponent ]
})
export class TodosAddModule {}
