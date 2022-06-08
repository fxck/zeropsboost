import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'zeropsboost-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input()
  data?: any[] | null;

  @Input()
  showWarning?: boolean | null;

  @Output()
  onUpdate = new EventEmitter<{
    id: number;
    data: any;
  }>();

  @Output()
  onDelete = new EventEmitter<number>();

  trackById(_: number, item: any) {
    return item.id;
  }
}
