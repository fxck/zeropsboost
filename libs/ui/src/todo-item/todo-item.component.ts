import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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
  text?: string;

  @Input()
  completed?: boolean

  @Input()
  date?: string;

  @Output()
  remove = new EventEmitter<number>();

  @Output()
  update = new EventEmitter<{
    index: number;
    item: { text: string; completed: boolean; };
    toggleButtonClick: boolean;
  }>();

  isUpdateMode = false;

}
