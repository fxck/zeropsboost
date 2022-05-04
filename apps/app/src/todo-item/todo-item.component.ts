import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'zeropsboost-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input()
  index!: number;

  @Input()
  text: string;

  @Input()
  completed: boolean

  @Input()
  date: string;

  @Output()
  remove = new EventEmitter<number>();

  @Output()
  update = new EventEmitter<{ index: number; item: Todo; toggleButtonClick: boolean; }>();

  isUpdateMode = false;

}
