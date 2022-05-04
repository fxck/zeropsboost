import { Component } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
  date: string;
}

@Component({
  selector: 'zeropsboost-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos = [
    {
      text: 'Naučit se Angular',
      completed: true,
      date: '3. 5. 2022'
    },
    {
      text: 'Naučit se git',
      completed: false,
      date: '1. 4. 2022'
    },
  ];

  addTodo(value: string) {
    const todo = {
      text: value,
      completed: false,
      date: new Date().toISOString()
    };
   this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  updateTodo(index: number, newValue: Todo, keepDate: boolean) {
    const updatedValue = {
      ...newValue,
      date: keepDate ? newValue.date : new Date().toISOString()
    };
    this.todos[index] = updatedValue;
  }

  trackByIndex(index: number) {
    return index;
  }

  setAllToCompleted() {
    this.todos.forEach((_, index) => this.todos[index].completed = true);
  }
}
