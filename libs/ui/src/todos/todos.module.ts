import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos.component';


@NgModule({
  declarations: [ TodosComponent ],
  exports: [ TodosComponent ],
  imports: [ CommonModule ]
})
export class TodosModule {}
