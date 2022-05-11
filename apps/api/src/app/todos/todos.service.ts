import { Injectable } from '@nestjs/common';
import { subMinutes } from 'date-fns';
import { Todo, TodoBase } from './todos.model';

const INITIAL_DATA: Todo[] = [
  {
    id: 1,
    text: 'foo',
    completed: true,
    created: subMinutes(new Date(), 10).toISOString()
  },
  {
    id: 2,
    text: 'bar',
    completed: false,
    created: subMinutes(new Date(), 10).toISOString()
  }
];

@Injectable()
export class TodosService {
  data = INITIAL_DATA;

  getAll() {
    return this.data;
  }

  add(data: TodoBase) {
    const newItem = {
      ...data,
      id: Date.now(),
      created: new Date().toISOString()
    };

    this.data = [
      ...this.data,
      newItem
    ];

    return newItem;
  }

  update(id: number, data: Partial<TodoBase>) {
    let updatedItem: Todo;

    this.data = this.data.map((itm) => {
      if (itm.id !== id) { return itm; }
      updatedItem = {
        ...itm,
        ...data
      };

      return updatedItem;
    });

    return updatedItem;
  }

  delete(id: number) {
    this.data = this.data.filter((itm) => itm.id !== id);
    return id;
  }

}
