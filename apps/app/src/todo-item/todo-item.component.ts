import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zeropsboost-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @Input()
  index!: number;

  @Input()
  item!: string;

  @Output()
  remove = new EventEmitter<number>();

  @Output()
  update = new EventEmitter<{ index: number; item: string; }>();

}
