import { Component } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'zeropsboost-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos = [
    {
      text: 'string',
      completed: true,
    },
    {
      text: 'completed',
      completed: false,
    },
  ];

  addTodo(value: Todo) {
    this.todos.push(value);
    console.log(value);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  updateTodo(index: number, newValue: Todo) {
    this.todos[index] = newValue;
  }
}